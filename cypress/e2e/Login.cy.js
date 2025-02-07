import {SignIn} from "/cypress/fixtures/selector.js";

  export const Login = () => {
    
      cy.get(SignIn.Loginbutton).click();
      cy.get(SignIn.Aplhapaylogo).should("be.visible")
      cy.get(SignIn.emailfield).should("be.visible").type(SignIn.validemailaddress)
      cy.get(SignIn.passwordField).should("be.visible").type(SignIn.validpassword)
      cy.get(SignIn.signInbutton).should("be.visible").click()


    }



