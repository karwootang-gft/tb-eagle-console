import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { loginSuccess, loginFailure } from './login.actions';

export const loginFeatureKey = 'login-reducer';

export interface State {
  isAuthenticated: boolean;
}

export const initialState: State = {
  isAuthenticated: false
};

const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user, isAuthenticated: true })),
  on(loginFailure, state => ({ ...state, user: undefined, isAuthenticated: false }))
);

export function reducer(state: State, action: Action) {
  return loginReducer(state, action);
}

export const selectFeature = state => state[loginFeatureKey];
export const selectIsAuthenticated = createSelector(selectFeature, state => state && state.isAuthenticated);
export const selectUser = createSelector(selectFeature, state => state && state.user);
export const selectUserIsAdmin = createSelector(selectFeature, state => state && state.user && state.user.isAdmin);
