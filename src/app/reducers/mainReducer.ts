// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import {   GOT_ACTIVITIES , ADD_ACTIVITY, ADDED_ACTIVITY, DELETE_ACTIVITY , ACTIVITY_DELETED } from '../actions/activitiesActions';
import { GOT_PROGRAMS } from '../actions/programsActions'
import Activity from '../models/Activity'
import Program from '../models/Program'

export interface AppState {
	programs : Program[] ,
	activities : Activity[],
	flashMessage : string
}

export const INITIAL_STATE : AppState = {
	programs : [] ,
	activities : [],
	flashMessage : ''
}

export function mainReducer(state: AppState = INITIAL_STATE, action: Action) {
	console.log(action)
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
		case ACTIVITY_DELETED:
			let newActivities = [...state.activities]
			newActivities.splice(
			    newActivities.map(function (activity) {
			      return activity.id;
			    }).indexOf(action.payload.activityId)
			,1);
			return {
				...state,
				activities : newActivities,
				flashMessage : "Activity Deleted"
			};

		case ADDED_ACTIVITY:
			return {
				...state,
				activities : [...state.activities , ...action.payload.pulledItem],
				flashMessage : "Activity Added"
			};

		default:
			return state;
	}
}
