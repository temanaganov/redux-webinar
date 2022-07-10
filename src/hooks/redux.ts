import { TypedUseSelectorHook, useDispatch as reduxUseDispatch, useSelector as reduxUseSelector } from 'react-redux';
import type { TAppState, TAppDispatch } from '../store';

export const useSelector: TypedUseSelectorHook<TAppState> = reduxUseSelector;
export const useDispatch: () => TAppDispatch = reduxUseDispatch;
