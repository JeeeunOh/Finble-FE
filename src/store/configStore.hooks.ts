import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './createStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// useSelect에 별도의 RootState type 을 붙이지않기위한 useAppSelect 생성
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
