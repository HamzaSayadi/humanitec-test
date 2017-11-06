// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import { GET_PROGRAMS } from '../actions';


export interface AppState {
	programs : object[]
}

export const INITIAL_STATE : AppState = {
	programs : []
}

export function programsReducer(state: AppState = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case GET_PROGRAMS:
			return {
				...state,
				programs : state.programs
			};

		default:
			return state;
	}
}
