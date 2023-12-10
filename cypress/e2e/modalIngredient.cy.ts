// https://example.cypress.io
import { selectors } from "../support/selectors";
describe("ingredient popup open", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(1920, 1280);
  });
  it("Должно открываться и закрываться модальное окно с информацией об ингредиенте", () => {
    cy.get(selectors.ingredients.ingredient + ":eq(3)").click();
    cy.get(selectors.modal.container).should("exist");
    cy.get(selectors.modal.container + " h2").contains("Детали ингредиента");

    cy.get(selectors.modal.closeButton).click();
    cy.get(selectors.modal.container).should("not.exist");
  });
});
