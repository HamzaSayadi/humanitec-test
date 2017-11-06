// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import { GOT_PROGRAMS , GOT_ACTIVITIES } from '../actions';
import Activity from '../models/Activity'
import Program from '../models/Program'

export interface AppState {
	programs : Program[] ,
	activities : Activity[]
}

export const INITIAL_STATE : AppState = {
	programs : [] ,
	activities : []
}

export function mainReducer(state: AppState = INITIAL_STATE, action: Action) {
	console.info(action.type)
	switch (action.type) {
		case GOT_PROGRAMS:
			return {
				...state,
				programs : action.payload.pulledArray
			};
		case GOT_ACTIVITIES:
			return {
				...state,
				activities : action.payload.pulledArray
			};

		default:
			return state;
	}
}
