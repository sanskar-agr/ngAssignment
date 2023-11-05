import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserState } from '.././reducers/user.reducer';


export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserDetail = createSelector(
  selectUserState,
  (state) => state.user
);
