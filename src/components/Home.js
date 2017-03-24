import React, { Component } from 'react';
import { View, Text, Image,} from 'react-native';
import { connect } from 'react-redux';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { ListView } from 'react-native';

import { CardItem, Card } from './common/index';
import { deviceWidth, deviceHeight } from './reusable/independent/utils/device_dimensions';
import MakePressable from './reusable/independent/MakePressable';
import TextInput from './reusable/independent/TextInput';
import * as actions from '../actions';
import { Button,} from 'react-native-material-design';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class SearchForm extends Component {
	constructor (props) {
		super(props);
		this.state = { matchedSpecialities: [], searchedText: null };
	}

	componentWillMount () {
		this.props.fetchSpecialities();
	}

	_specialitySearch = (searchedText) => {
		this.setState({searchedText});
		const specialities = this.props.specialities.data;

		let matchedSpecialities = specialities.filter(speciality => {
			return speciality.name.toLowerCase().indexOf(searchedText.toLowerCase()) > - 1;
		});

		if ( !searchedText )
			matchedSpecialities = [];

		this.setState({ matchedSpecialities });
	};

	renderMatchedSpeciality = (speciality) => {
		return (
			<CardItem style={[{marginHorizontal:10, justifyContent: 'center', backgroundColor: 'white',}]}>
				<MakePressable onPress={()=> this.setState({searchedText: speciality.name})}>
					<View>
						<Text>
							{speciality.name}
						</Text>
					</View>
				</MakePressable>
			</CardItem>
		);
	};

	render () {
		console.log('this.state.searchedText', this.state.searchedText);
		const { toggleMenuVisibility } = this.props;

		const TB = (
			<CardItem style={{ backgroundColor: 'white', }}>
				<MakePressable onPress={() => toggleMenuVisibility({ event: 'tap' }) }>
					<Image source={require('../../src/Images/menu-icon.gif')}
								 style={styles.menuIconStyles}/>
				</MakePressable>
				<Image
					source={require('../Images/logo.png')}
					style={[styles.logo,]}
				/>
			</CardItem>
		);

		const Title = (
			<CardItem>
				<View style={{ paddingTop: 30 }}>
					<Text style={[styles.title, styles.textAlign]}>
						LOOKING FOR A DOCTOR?
					</Text>
					<Text style={[styles.subtitle, styles.textAlign]}>
						Find the best doctors nearby and book health appointment and available times
					</Text>
				</View>
			</CardItem>
		);

		const Input = (
			<CardItem>
				<TextInput
					iconClass={AwesomeIcon}
					iconName='search'
					iconColor='#384184'
					label="Search Specialities"
					onChangeText={this._specialitySearch.bind(this)}
					value={this.state.searchedText}
				/>
			</CardItem>
		);

		const BTN = (
			<View style={{backgroundColor: '#384184', marginTop: 20}}>
				<Button value="SUBMIT"
								text="SUBMIT"
								overrides={{textColor: '#02c773',}}
								onPress={()=> console.log("I pressed a flat button")}
				/>
			</View>
		);

		const List = (
			<View style={{ height: 100 }}>
				<ListView
					dataSource={ds.cloneWithRows(this.state.matchedSpecialities)}
					renderRow={this.renderMatchedSpeciality.bind(this)}
				/>
			</View>
		);

		return (
			<Image
				source={require('../Images/background-image.jpg')}
				style={styles.backImage}
			>
				{TB}
				{Title}
				{Input}
				{List}
				{BTN}
			</Image>
		)
	}
}

const styles = {
	backImage: {
		// flex:1,
		resizeMode: 'cover',
		width: deviceWidth,
		height: deviceHeight
	},
	logo: {
		flex: 1,
		resizeMode: 'contain',
		height: 70,
		width: 70,
	},
	c: {
		borderWidth: 1,
		borderColor: 'red'
	},
	title: {
		fontSize: 50,
		color: '#384184',
	},
	subtitle: {
		fontSize: 15,
		color: '#384184'
	},
	textAlign: {
		textAlign: 'center'
	},
};

const mapStateToProps = ({ specialities }) => {
	return { specialities }
};

export default connect(mapStateToProps, actions)(SearchForm);