// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import { GOT_PROGRAMS , GOT_ACTIVITIES } from '../actions';


export interface AppState {
	programs : object[]
}

export const INITIAL_STATE : AppState = {
	programs : []
}

export function mainReducer(state: AppState = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case GOT_PROGRAMS:
			return {
				...state,
				programs : state.programs
			};
		case GOT_ACTIVITIES:
			return {
				...state,
				programs : state.programs
			};

		default:
			return state;
	}
}
