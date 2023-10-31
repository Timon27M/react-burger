export const getBurgerConstructorIngradients = (state) => {
  return state.burgerConstructor.constructorIngredients;
};

export const getTotalPice = (state) => {
  return state.burgerConstructor.totalPrice;
};

export const getIsOpenedPopupIngradient = (state) => {
  return state.ingredientDetails.isPopupOpened;
};
export const getSelectedIngradient = (state) => {
  return state.ingredientDetails.ingredient;
};

export const getNumberOrder = (state) => {
  return state.order.lastNumberOrder;
};

export const getIsLoadingOrder = (state) => {
  return state.order.isLoading;
};

export const getIsOpenedPopupOrder = (state) => {
  return state.order.isOpenOrderPopup;
};

export const getIsLoggedIn = (state) => {
  return state.currentUser.isLoggedIn;
};

export const getIsLoading = (state) => {
  return state.currentUser.isLoading;
};

export const getCurrentUser = (state) => {
  return state.currentUser.currentUser;
};

export const getIngredients = (state) => {
  return state.ingredients.ingredients;
}
;
export const getIsOpenResetPasswordPage = (state) => {
  return state.resetPassword.isOpenResetPasswordPage;
};

