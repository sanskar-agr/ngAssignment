import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const login = createAction('[User] Login', props<{ user: User }>());
