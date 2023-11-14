import {
  useDispatch as dispatch,
  useSelector as selector,
  TypedUseSelectorHook,
} from "react-redux";
import store from "../services/store/store";
import rootReducer from "../services/reducers/root-reducer";

type AppDispacth = typeof store.dispatch;

type DispatchFunc = () => AppDispacth;
type RootState = ReturnType<typeof rootReducer>


export const useSelector: TypedUseSelectorHook<RootState> = selector;

export const useDispatch: DispatchFunc = dispatch;
