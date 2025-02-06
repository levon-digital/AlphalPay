import {Logout} from "/cypress/fixtures/selector.js";
describe('Logout flow', () => {
    it('Log In Users should be able to log out', () => {
      cy.visit('/')
      cy.get(Logout.Loginbutton).click();
      cy.get(Logout.Aplhapaylogo).should("be.visible")
      cy.get(Logout.emailfield).should("be.visible").type(Logout.validemailaddress)
      cy.get(Logout.passwordField).should("be.visible").type(Logout.validpassword)
      cy.get(Logout.signInbutton).should("be.visible").click()
      cy.get(Logout.Aplhapaylogo).should("be.visible")
      cy.get(Logout.headermessage).should("not.be.NaN").should("be.visible");
      cy.get(Logout.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");
      cy.get(Logout.Profileicon).should("be.visible").click()
      cy.get(Logout.logoutbutton).should("be.visible").click()
      cy.get(Logout.Aplhapaylogo).should("be.visible")
      cy.get(Logout.Loginheaderinfo).should("be.visible").should("have.text", "Welcome back, Please log in to your account to access your dashboard");
})

})