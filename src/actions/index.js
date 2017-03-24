import * as aT from './types';
import axios from 'axios';

const URI = 'https://stage.pliro.com:9090/api/v1/';

export const toggleMenuVisibility = ({ event, isOpen }) => {
	return { type: aT.TOGGLE_MENU_VISIBILITY, payload: { event, isOpen } };
};

export const fetchSpecialities = () => {
	return dispatch => {
		axios.get(`${URI}specialty`)
			.then(response => dispatch({type: aT.FETCH_SPECIALITY_LIST, payload: response}))
			.catch()
	}
};

