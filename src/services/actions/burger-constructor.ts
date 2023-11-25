import { TIngradientObj } from "../../utils/types";
import { nanoid } from "nanoid";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const DELETE_INGREDIENTS: 'DELETE_INGREDIENTS' = 'DELETE_INGREDIENTS';
export const ADD_TOTALPRICE: 'ADD_TOTALPRICE' = 'ADD_TOTALPRICE';
export const UPDATE_SORT_INGREDIENTS: 'UPDATE_SORT_INGREDIENTS' = 'UPDATE_SORT_INGREDIENTS';

export const addIngredient = (ingredientObj: TIngradientObj) => ({type: ADD_INGREDIENT, payload: {...ingredientObj, uniqId: nanoid()}})
export const deleteIngredient = (uniqId: string) => ({type: DELETE_INGREDIENT, payload: uniqId})
export const updateTotalPrice = () => ({type: ADD_TOTALPRICE})
export const deleteIngredientsConstructor = () => (dispatch: any) => {
    dispatch({type: DELETE_INGREDIENTS})
}