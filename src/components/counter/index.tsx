import React from 'react';
import s from './counter.module.css';
import { useDispatch, useSelector } from '../../hooks/redux';
import { customDecrement, customIncrement, decrement, increment } from '../../store/reducers/counter';

export const Counter = () => {
	const counter = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className={s.counter}>
			<button type="button" onClick={() => dispatch(customDecrement(Number(prompt()) || 0))}>
				---
			</button>
			<button type="button" onClick={() => dispatch(decrement())}>
				-
			</button>
			<h1>{counter}</h1>
			<button type="button" onClick={() => dispatch(increment())}>
				+
			</button>
			<button type="button" onClick={() => dispatch(customIncrement(Number(prompt()) || 0))}>
				+++
			</button>
		</div>
	);
};
