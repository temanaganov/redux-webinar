import { rootReducer } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: [thunk],
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = ThunkDispatch<TAppState, void, AnyAction>;
