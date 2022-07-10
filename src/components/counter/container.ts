import { connect, ConnectedProps } from 'react-redux';
import { Counter } from './counter';
import { TAppState } from '../../store';
import { increment, decrement, customIncrement, customDecrement } from '../../store/reducers/counter';

const mapStateToProps = (state: TAppState) => ({
	counter: state.counter.value,
});

const mapDispatchToProps = {
	increment,
	decrement,
	customIncrement,
	customDecrement,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TCounterConnected = ConnectedProps<typeof connector>;

export const CounterContainer = connector(Counter);
