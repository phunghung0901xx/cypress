import { mount } from 'cypress/react'
import Counter from '../../src/QAAutomationLabs'

describe("<Counter>", () => {
  const counterSelector = '[data-cy="counter"]';
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]";
  it("Two Time Increment then decrement the count ", () => {
    cy.mount(<Counter ></Counter>);

    //Two time Increment the Count 
    cy.get(incrementSelector).click();
    cy.get(incrementSelector).click();

    // Assert
    cy.get(counterSelector).should("contain.text", 2);

    //Do the decrement
    cy.get(decrementSelector).click();

    // Assert
    cy.get(counterSelector).should("have.text", "1");

    // Assert color
    cy.get(decrementSelector)
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
    // Assert background color
    cy.get(decrementSelector)
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 128, 0)");
  });
  it("Two Time decrement then Increment the count ", () => {
    cy.mount(<Counter ></Counter>);

    //Two time decrement the count
    cy.get(decrementSelector).click();
    cy.get(decrementSelector).click();
    // Assert
    cy.get(counterSelector).should("have.text", "-2");

    //Then increment the count
    cy.get(incrementSelector).click();

    cy.get(counterSelector).should("have.text", "-1");
    // Assert color
    cy.get(decrementSelector)
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
    // Assert background color
    cy.get(decrementSelector)
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 128, 0)");
  });
});