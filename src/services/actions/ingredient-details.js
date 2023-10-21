export const OPEN_INGREDIENT_POPUP = 'OPEN_INGRADIENT_POPUP';
export const CLOSE_INGREDIENT_POPUP = 'CLOSE_INGREDIENT_POPUP';

export const addIngredientPopup = (ingradientObj) => ({type: OPEN_INGREDIENT_POPUP, payload: ingradientObj})
export const closeIngredientPopup = () => ({type: CLOSE_INGREDIENT_POPUP})