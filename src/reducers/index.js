import { combineReducers } from 'redux';
import toggleMenuReducer from './menu__reducer';
import specialityReducer from './speciality__reducer';

export default combineReducers({
	menuOpen: toggleMenuReducer,
	specialities: specialityReducer
})

