import { useDispatch, useSelector, useStore } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = ()=>useDispatch();//data send to store
export const useAppSelector = useSelector; //data get from store
export const useAppStore = useStore;