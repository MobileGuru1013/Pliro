import * as aT from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case aT.FETCH_SPECIALITY_LIST:
			return action.payload;
	}
	return state;
};