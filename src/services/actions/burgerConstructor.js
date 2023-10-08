import { nanoid } from "nanoid";
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_TOTALPRICE = 'ADD_TOTALPRICE';

export const addIngredient = (ingredientObj) => ({type: ADD_INGREDIENT, payload: {...ingredientObj, uniqId: nanoid()}})
export const deleteIngredient = (uniqId) => ({type: DELETE_INGREDIENT, payload: uniqId})
export const updateTotalPrice = () => ({type: ADD_TOTALPRICE})