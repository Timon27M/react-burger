export const getBurgerConstructorIngradients = (state) => {
   return state.burgerConstructor.constructorIngredients
}

export const getTotalPice = (state) => {
    return state.burgerConstructor.totalPrice
}

export const getIsOpenedPopupIngradient = (state) => {
    return state.ingredientDetails.isPopupOpened
}
export const getSelectedIngradient = (state) => {
    return state.ingredientDetails.ingredient
}

export const getNumberOrder = (state) => {
    return state.order.lastNumberOrder
}

export const getIsOpenedPopupOrder = (state) => {
    return state.order.isOpenOrderPopup
}