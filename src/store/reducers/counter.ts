import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
	value: number;
}

const initialState: ICounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state: ICounterState) {
			state.value++;
		},
		decrement(state: ICounterState) {
			state.value--;
		},
		customIncrement(state: ICounterState, { payload }: PayloadAction<number>) {
			state.value += payload;
		},
		customDecrement(state: ICounterState, { payload }: PayloadAction<number>) {
			state.value -= payload;
		},
	},
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, customIncrement, customDecrement } = counterSlice.actions;
