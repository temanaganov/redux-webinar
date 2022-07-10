export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const CUSTOM_INCREMENT = 'COUNTER/CUSTOM_INCREMENT';
export const CUSTOM_DECREMENT = 'COUNTER/CUSTOM_DECREMENT';

interface ICounterState {
	value: number;
}

interface IIncrementAction {
	type: typeof INCREMENT;
}

interface IDecrementAction {
	type: typeof DECREMENT;
}

interface ICustomIncrementAction {
	type: typeof CUSTOM_INCREMENT;
	payload: number;
}

interface ICustomDecrementAction {
	type: typeof CUSTOM_DECREMENT;
	payload: number;
}

type TCounterAction = IIncrementAction | IDecrementAction | ICustomIncrementAction | ICustomDecrementAction;

const initialState: ICounterState = {
	value: 0,
};

export const counterReducer = (state = initialState, action: TCounterAction): ICounterState => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, value: state.value + 1 };
		case DECREMENT:
			return { ...state, value: state.value - 1 };
		case CUSTOM_INCREMENT:
			return { ...state, value: state.value + action.payload };
		case CUSTOM_DECREMENT:
			return { ...state, value: state.value - action.payload };
		default:
			return state;
	}
};

export const increment = (): IIncrementAction => ({
	type: INCREMENT,
});

export const decrement = (): IDecrementAction => ({
	type: DECREMENT,
});

export const customIncrement = (payload: number): ICustomIncrementAction => ({
	type: CUSTOM_INCREMENT,
	payload,
});

export const customDecrement = (payload: number): ICustomDecrementAction => ({
	type: CUSTOM_DECREMENT,
	payload,
});
