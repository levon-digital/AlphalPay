import {SignIn} from "/cypress/fixtures/selector.js";
describe('Sign In flow with Valid credentials', () => {
    it('Login with Valid credentials', () => {
      cy.visit('/')
      cy.get(SignIn.Loginbutton).click();
      cy.get(SignIn.Aplhapaylogo).should("be.visible")
      cy.get(SignIn.emailfield).should("be.visible").type(SignIn.validemailaddress)
      cy.get(SignIn.passwordField).should("be.visible").type(SignIn.validpassword)
      cy.get(SignIn.signInbutton).should("be.visible").click()
      cy.get(SignIn.Aplhapaylogo).should("be.visible")
      cy.get(SignIn.headermessage).should("not.be.NaN").should("be.visible");
      cy.get(SignIn.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");

    })

    it('Login with InValid email address', () => {
        cy.visit('/')
        cy.get(SignIn.Loginbutton).click();
        cy.get(SignIn.Aplhapaylogo).should("be.visible")
        cy.get(SignIn.emailfield).should("be.visible").type(SignIn.invalidemailaddress)
        cy.get(SignIn.passwordField).should("be.visible").type(SignIn.validpassword)
        cy.get(SignIn.signInbutton).should("be.visible").click()
        cy.get(SignIn.invalidcredentialspopup).should("be.visible").should("have.text", "Invalid Credentials");
      })

      it('Login with InValid Password address', () => {
        cy.visit('/')
        cy.get(SignIn.Loginbutton).click();
        cy.get(SignIn.Aplhapaylogo).should("be.visible")
        cy.get(SignIn.emailfield).should("be.visible").type(SignIn.validemailaddress)
        cy.get(SignIn.passwordField).should("be.visible").type(SignIn.invalidpassword)
        cy.get(SignIn.signInbutton).should("be.visible").click()
        cy.get(SignIn.invalidcredentialspopup).should("be.visible").should("have.text", "Invalid Credentials");
      })
     
      it('Login with Valid email and blank Passwordfield', () => {
        cy.visit('/')
        cy.get(SignIn.Loginbutton).click();
        cy.get(SignIn.Aplhapaylogo).should("be.visible")
        cy.get(SignIn.emailfield).should("be.visible").type(SignIn.validemailaddress)
        cy.get(SignIn.signInbutton).should("be.visible").click()
        cy.get(SignIn.passwordfielderror).should("be.visible").should("have.text", "Provide a password please")
       
      })

      it('Login with Valid password and blank emailfield', () => {
        cy.visit('/')
        cy.get(SignIn.Loginbutton).click();
        cy.get(SignIn.Aplhapaylogo).should("be.visible")
        cy.get(SignIn.passwordField).should("be.visible").type(SignIn.validpassword)
        cy.get(SignIn.signInbutton).should("be.visible").click()
        cy.get(SignIn.emailfielderror).should("be.visible").should("have.text", "Provide your email please")
       
      })
  
  
  

})