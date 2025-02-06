import {updateprofile} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
describe('Update User Profile', () => {
    it('User should be able to update User FullNmae', () => {
      cy.visit('/')
      cy.get(updateprofile.Loginbutton).click();
      cy.get(updateprofile.Aplhapaylogo).should("be.visible")
      cy.get(updateprofile.emailfield).should("be.visible").type(updateprofile.validemailaddress)
      cy.get(updateprofile.passwordField).should("be.visible").type(updateprofile.validpassword)
      cy.get(updateprofile.signInbutton).should("be.visible").click()
      cy.get(updateprofile.Aplhapaylogo).should("be.visible")
      cy.get(updateprofile.headermessage).should("not.be.NaN").should("be.visible");
      cy.get(updateprofile.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");
      cy.get(updateprofile.Profileicon).should("be.visible").click()
      cy.scrollTo("center")
      ///Update Profile FUllname
      cy.get(updateprofile.fullnamefield).should("not.be.NaN").clear().type(faker.person.fullName());
      cy.get(updateprofile.Usernamefield).should("not.be.NaN")
      cy.get(updateprofile.Phonemunberfield).should("not.be.NaN")
      cy.get(updateprofile.emaildaddressfield).should("not.be.NaN")
      cy.get(updateprofile.updatebutton).should("be.visible").click()
      cy.get(updateprofile.successfullpopmessage).should("be.visible").should("have.text", "Update Successful");
})

it('User should be able to update UserName', () => {
  cy.visit('/')
  cy.get(updateprofile.Loginbutton).click();
  cy.get(updateprofile.Aplhapaylogo).should("be.visible")
  cy.get(updateprofile.emailfield).should("be.visible").type(updateprofile.validemailaddress)
  cy.get(updateprofile.passwordField).should("be.visible").type(updateprofile.validpassword)
  cy.get(updateprofile.signInbutton).should("be.visible").click()
  cy.get(updateprofile.Aplhapaylogo).should("be.visible")
  cy.get(updateprofile.headermessage).should("not.be.NaN").should("be.visible");
  cy.get(updateprofile.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");
  cy.get(updateprofile.Profileicon).should("be.visible").click()
  cy.scrollTo("center")
  ///Update Profile UserName
  cy.get(updateprofile.fullnamefield).should("not.be.NaN");
  cy.get(updateprofile.Usernamefield).should("not.be.NaN").clear().type(faker.person.fullName());
  cy.get(updateprofile.Phonemunberfield).should("not.be.NaN");
  cy.get(updateprofile.emaildaddressfield).should("not.be.NaN");
  cy.get(updateprofile.updatebutton).should("be.visible").click()
  cy.get(updateprofile.successfullpopmessage).should("be.visible").should("have.text", "Update Successful");
})


  })