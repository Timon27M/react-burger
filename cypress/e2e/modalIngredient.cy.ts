import { selectors } from "../support/selectors";
describe("ingredient popup open", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(1920, 1280);
  });
  it("should open the modal", () => {
    cy.get(selectors.ingredients.ingredientName).contains('Соус фирменный Space Sauce').click();
    cy.get(selectors.ingredients.ingredientDetailsName).contains(
      "Соус фирменный Space Sauce"
    );
    cy.get(selectors.modal.closeButton).click();
    cy.get(selectors.modal.container).should("not.exist");
  });
});
