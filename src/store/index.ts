import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: [thunk],
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
