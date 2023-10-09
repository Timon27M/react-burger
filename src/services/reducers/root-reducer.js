import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients";
import burgerConstructorReducer from "./burger-constructor";
import orderReducer from "./order";
import ingredientDetailsReducer from "./ingredient-details";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
})

export default rootReducer;