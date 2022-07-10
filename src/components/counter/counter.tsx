import React from 'react';
import s from './counter.module.css';
import { TCounterConnected } from './container';

interface ICounterProps extends TCounterConnected {}

export const Counter = ({ counter, increment, decrement, customIncrement, customDecrement }: ICounterProps) => {
	return (
		<div className={s.counter}>
			<button type="button" onClick={() => customDecrement(Number(prompt()) || 0)}>
				---
			</button>
			<button type="button" onClick={decrement}>
				-
			</button>
			<h1>{counter}</h1>
			<button type="button" onClick={increment}>
				+
			</button>
			<button type="button" onClick={() => customIncrement(Number(prompt()) || 0)}>
				+++
			</button>
		</div>
	);
};
