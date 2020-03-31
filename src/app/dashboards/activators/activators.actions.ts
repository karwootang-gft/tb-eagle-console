import { createAction, props } from '@ngrx/store';

export const setProgress = createAction('[Activators] set-progress', props<{ step: number }>());
export const setDeprecated = createAction('[Activators] set-deprecated', props<{ id: number }>());
export const setLocked = createAction('[Activators] set-locked', props<{ id: number }>());
export const denyAccess = createAction('[Activators] deny-access', props<{ activatorId: number; teamId: string }>());
export const grantAccess = createAction('[Activators] grant-access', props<{ activatorId: number; teamId: string }>());
export const requestAccess = createAction('[Activators] request-access', props<{ id: number }>());
