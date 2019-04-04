import { MenuActionTypes, MenuActions } from './menu.actions';
import { Menu } from './menu.model';

export interface State {
	error: string;
	menus: Menu[];
}

const initialState: State = {
	error: '',
	menus: []
};

export function reducer(state = initialState, action: MenuActions): State {
	switch (action.type) {
		case MenuActionTypes.LoadSideMenuFailed:
			return {
				...state,
				error: action.payload.error.message,
				menus: []
			};
		case MenuActionTypes.LoadSideMenuSuccess:
			return {
				...state,
				error: '',
				menus: action.payload
			};
		default:
			return state;
	}
}
