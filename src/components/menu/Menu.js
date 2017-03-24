import React, { Component } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';

// import redirectTo from '../../utils/redirectTo';
// import { signOut } from '../screens/sign_in_page/user__actions';
import { toggleMenuVisibility } from '../../actions/index.js';
import { deviceWidth, deviceHeight } from '../reusable/independent/utils/device_dimensions';

class Menu extends Component {
	// _onSignOut() {
	//     this.props.toggleMenuVisibility({ event: 'onChange', isOpen: false });
	//     this.props.signOut();
	//     redirectTo.signIn();
	// }

	render () {
		return (
			<ScrollView scrollsToTop={false} style={styles.menu} contentContainerStyle={styles.contentContainer}>
				<View style={[styles.flexAligned, styles.rowContainer]}>
					<AwesomeIcon name='home' size={25} color='#384184'/>
					<Text onPress={() => {
						this.props.toggleMenuVisibility({ event: 'onChange', isOpen: false });
						// redirectTo.allChannels()
					}}
								style={[styles.item,]}>
						HOME
					</Text>
				</View>
				<View style={[styles.flexAligned, styles.rowContainer]}>
					<FoundationIcon name='social-blogger' size={25} color='#384184'/>
					<Text onPress={() => {
						this.props.toggleMenuVisibility({ event: 'onChange', isOpen: false });
						// redirectTo.allChannels()
					}}
								style={[styles.item, {marginLeft: 19}]}>
						BLOG
					</Text>
				</View>
				<View style={[styles.flexAligned, styles.rowContainer] }>
					<SimpleIcon name='logout' size={25} color='#384184'/>
					<Text onPress={() => console.log('SIGN OUTTTT',)} style={styles.item}>Logout</Text>
				</View>
			</ScrollView>

		)
	}
}

const styles = {
	menu: {
		flex: 1,
		height: deviceHeight,
		width: deviceWidth,
		backgroundColor: '#FAFAFA',
		paddingTop: 20,
		paddingLeft: 20

	},
	contentContainer: {
		// flex: 1,
	},
	homeContainer: {
		marginBottom: 20,
		marginTop: 20,
		fontWeight: 'bold',
	},
	item: {
		color: '#02c773',
		fontSize: 16,
		fontWeight: '600',
		fontFamily: 'notoserif',
		paddingTop: 5,
		marginLeft: 12
	},
	flexAligned: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rowContainer: {
		marginVertical: 15,
	},
}

// const mapStateToProps = ({ user }) => {
//     return { username: user.profile.username };
// }
export default connect(null, { toggleMenuVisibility })(Menu);

