import { RootState } from "./store/store";

export const getBurgerConstructorIngradients = (state: RootState) => {
  return state.burgerConstructor.constructorIngredients;
};

export const getTotalPice = (state: RootState) => {
  return state.burgerConstructor.totalPrice;
};

export const getIsOpenedPopupIngradient = (state: RootState) => {
  return state.ingredientDetails.isPopupOpened;
};

// export const getSelectedIngradient = (state: RootState) => {
//   return state.ingredientDetails.ingredient;
// };

export const getNumberOrder = (state: RootState) => {
  return state.order.lastNumberOrder;
};

export const getIsLoadingOrder = (state: RootState) => {
  return state.order.isLoading;
};

export const getIsOpenedPopupOrder = (state: RootState) => {
  return state.order.isOpenOrderPopup;
};

export const getIsLoggedIn = (state: RootState) => {
  return state.currentUser.isLoggedIn;
};

export const getIsLoading = (state: RootState) => {
  return state.currentUser.isLoading;
};

export const getCurrentUser = (state: RootState) => {
  return state.currentUser.currentUser;
};

export const getIngredients = (state: RootState) => {
  return state.ingredients.ingredients;
};
export const getIsOpenResetPasswordPage = (state: RootState) => {
  return state.resetPassword.isOpenResetPasswordPage;
};
