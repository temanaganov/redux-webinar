import { counterReducer } from './counter';
import { usersReducer } from './users';

export const rootReducer = {
	counter: counterReducer,
	users: usersReducer,
};
