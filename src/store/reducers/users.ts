import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';
import { TAppDispatch } from '../index';
import axios, { AxiosError } from 'axios';

interface IUsersState {
	data: IUser[];
	loading: boolean;
	error: string | null;
}

const initialState: IUsersState = {
	data: [],
	error: null,
	loading: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUsers(state: IUsersState) {
			state.data = [];
			state.loading = true;
			state.error = null;
		},
		fetchUsersSuccess(state: IUsersState, { payload }: PayloadAction<IUser[]>) {
			state.data = payload;
			state.loading = false;
			state.error = null;
		},
		fetchUsersError(state: IUsersState, { payload }: PayloadAction<string>) {
			state.data = [];
			state.loading = false;
			state.error = payload;
		},
	},
});

export const fetchUsersThunk = () => {
	return async (dispatch: TAppDispatch) => {
		try {
			dispatch(fetchUsers());
			const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			setTimeout(() => {
				dispatch(fetchUsersSuccess(data));
			}, 1000);
		} catch (err) {
			if (err instanceof AxiosError) {
				dispatch(fetchUsersError(err.message));
			}
		}
	};
};

export const usersReducer = usersSlice.reducer;
export const { fetchUsers, fetchUsersSuccess, fetchUsersError } = usersSlice.actions;
