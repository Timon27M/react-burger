import { selectors } from "../support/selectors";

describe("Отправка заказа", () => {
  beforeEach(() => {
    const email = "qwer@qq.qq";
    const password = "qwerqwer";
    cy.viewport(1920, 1280);
    cy.visit("http://localhost:3000/#/login");
    cy.get(selectors.login.emailInput).type(`${email}`);
    cy.get(selectors.login.passwordInput).type(`${password}{enter}`);
  });

  it("Заказ должен отправляться", () => {
    cy.get(selectors.ingredients.ingredient + ":eq(1)").trigger("dragstart");
    cy.get(selectors.constructor.container).trigger("drop");
    cy.get(selectors.constructor.ingredientBunTop).should("exist");
    cy.get(selectors.constructor.ingredientBunBottom).should("exist");

    cy.get(selectors.ingredients.ingredient + ":eq(2)").trigger("dragstart");
    cy.get(selectors.constructor.container).trigger("drop");
    cy.get(selectors.constructor.mainIngredients).should("not.be.empty");

    cy.get(selectors.constructor.OrderButton).should(
      "not.have.attr",
      "disabled"
    );
    cy.get(selectors.constructor.OrderButton).click();

    cy.get(selectors.modal.container).should("exist");
    cy.get(selectors.modal.orderNumber, { timeout: 20000 }).should(
      "be.visible"
    );
    cy.get(selectors.modal.closeButton, { timeout: 25000 }).click();
  });
});
