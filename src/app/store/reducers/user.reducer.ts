import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null,
};

const _userReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    user,
  }))
);

export function userReducer(state: UserState | undefined, action: any) {
  return _userReducer(state, action);
}
