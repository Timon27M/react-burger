import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients";
import burgerConstructorReducer from "./burgerConstructor";
import orderReducer from "./order";
import ingredientDetailsReducer from "./ingredientDetails";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
})

export default rootReducer;