import {Changepassword} from "/cypress/fixtures/selector.js";
describe('Reset Password flow', () => {
    it('reset password with valid email', () => {
      cy.visit('/')
      cy.get(Changepassword.Loginbutton).click();
      cy.get(Changepassword.Aplhapaylogo).should("be.visible")
      cy.get(Changepassword.resetbutton).should("be.visible").click();
      cy.get(Changepassword.emailfield).should("be.visible").type(Changepassword.validemailaddress);
      cy.get(Changepassword.submitbutton).should("be.visible").click();
      cy.get(Changepassword.Popupmessage).should("be.visible").should("have.text", "A password reset link has been sent to your email")

})

it('reset password with INvalid email', () => {
    cy.visit('/')
    cy.get(Changepassword.Loginbutton).click();
    cy.get(Changepassword.Aplhapaylogo).should("be.visible")
    cy.get(Changepassword.resetbutton).should("be.visible").click();
    cy.get(Changepassword.emailfield).should("be.visible").type(Changepassword.invalidemailaddress);
    cy.get(Changepassword.submitbutton).should("be.visible").click();
    cy.get(Changepassword.emailfielderror).should("be.visible").should("have.text", "Provide a valid email please")

})

it('reset password with valid email', () => {
    cy.visit('/')
    cy.get(Changepassword.Loginbutton).click();
    cy.get(Changepassword.Aplhapaylogo).should("be.visible")
    cy.get(Changepassword.resetbutton).should("be.visible").click();
    cy.get(Changepassword.emailfield).should("be.visible").type(Changepassword.validemailaddress);
    cy.get(Changepassword.submitbutton).should("be.visible").click();
    cy.get(Changepassword.Popupmessage).should("be.visible").should("have.text", "A password reset link has been sent to your email")
    cy.get(Changepassword.resendbutton).should("be.visible").click();
    cy.get(Changepassword.Popupmessage).should("be.visible").should("have.text", "A password reset link has been sent to your email")
    
})

})