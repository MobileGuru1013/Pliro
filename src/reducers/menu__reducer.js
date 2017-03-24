import * as aT from '../actions/types';

export default (state = false, action) => {
	switch (action.type) {
		case aT.TOGGLE_MENU_VISIBILITY:
			const { event, isOpen } = action.payload;

			if ( event === 'tap' ) {
				return ! state;
			}

			if ( event === 'onChange' ) {
				return isOpen;
			}

		default:
			return state;
	}
};