export const OPEN_INGREDIENT_POPUP: 'OPEN_INGRADIENT_POPUP' = 'OPEN_INGRADIENT_POPUP';
export const CLOSE_INGREDIENT_POPUP: 'CLOSE_INGREDIENT_POPUP' = 'CLOSE_INGREDIENT_POPUP';

export const addIngredientPopup = () => ({type: OPEN_INGREDIENT_POPUP})
export const closeIngredientPopup = () => ({type: CLOSE_INGREDIENT_POPUP})

type TOpenIngredientPopupAction = {
    readonly type: typeof OPEN_INGREDIENT_POPUP
}

type TCloseIngredientPopupAction = {
    readonly type: typeof CLOSE_INGREDIENT_POPUP
}

export type TIngredientDetailsActions = TOpenIngredientPopupAction | TCloseIngredientPopupAction