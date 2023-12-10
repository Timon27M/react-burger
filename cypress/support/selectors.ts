export const selectors = {
  constructor: {
    container: "[data-test=constructorContainer]",
    ingredientBunTop: "[data-test=constructorBunTop]",
    OrderButton: "[data-test=submitOrderButton]",
    ingredientBunBottom: "[data-test=constructorBunBottom]",
    mainIngredients: "[data-test=constructorMainIngredients]",
  },
  modal: {
    closeButton: "[data-testid=modalCloseButton]",
    container: "[data-testid=modalContainer]",
    orderNumber: "[data-test=orderNumber]",
  },
  ingredients: {
    ingredient: "[data-test=ingredientItem]",
  },

  login: {
    passwordInput: "[data-testid=password_input]",
    emailInput: "[data-testid=email_input]",
  },
};
