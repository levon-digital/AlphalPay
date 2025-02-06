import {Signup} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
const phoneNumber = `0700${faker.number.int({ min: 1000000, max: 9999999 })}`;
describe('Sign up flow with Valid credentials', () => {
  it('Positive Scenerio', () => {
    cy.visit('/')
    cy.get(Signup.Signupbutton).click();
    cy.get(Signup.Aplhapaylogo).should("be.visible")
    cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
    cy.get(Signup.Usernamefield).should("be.visible").type(faker.person.firstName());
    cy.get(Signup.phonenumberfield).should("be.visible").type(phoneNumber);
    cy.get(Signup.Emailaddressfield).should("be.visible").type(faker.internet.email());
    cy.get(Signup.Passwordfield).should("be.visible").type(Signup.PasswordData);
    cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.PasswordData);
    cy.get(Signup.clickcreatebutton).should("be.visible").click();
    cy.get(Signup.Aplhapaylogo).should("be.visible");
    cy.get(Signup.headermessage).should("not.be.NaN");
    cy.get(Signup.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");


})

it('Signup with Existing phonenumber', () => {
  cy.visit('/')
  cy.get(Signup.Signupbutton).click();
  cy.get(Signup.Aplhapaylogo).should("be.visible")
  cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
  cy.get(Signup.Usernamefield).should("be.visible").type(faker.person.firstName());
  cy.get(Signup.phonenumberfield).should("be.visible").type(Signup.ExistingphoneNumber);
  cy.get(Signup.Emailaddressfield).should("be.visible").type(faker.internet.email());
  cy.get(Signup.Passwordfield).should("be.visible").type(Signup.PasswordData);
  cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.PasswordData);
  cy.get(Signup.clickcreatebutton).should("be.visible").click();
  cy.get(Signup.errormessagepop).should("be.visible").should("have.text","A user with that phone number or email or username already exists")

  })

  it('Signup with Existing EmailAddress', () => {
    cy.visit('/')
    cy.get(Signup.Signupbutton).click();
    cy.get(Signup.Aplhapaylogo).should("be.visible")
    cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
    cy.get(Signup.Usernamefield).should("be.visible").type(faker.person.firstName());
    cy.get(Signup.phonenumberfield).should("be.visible").type(phoneNumber);
    cy.get(Signup.Emailaddressfield).should("be.visible").type(Signup.Existingemailaddress);
    cy.get(Signup.Passwordfield).should("be.visible").type(Signup.PasswordData);
    cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.PasswordData);
    cy.get(Signup.clickcreatebutton).should("be.visible").click();
    cy.get(Signup.errormessagepop).should("be.visible").should("have.text","A user with that phone number or email or username already exists")
  
    })

    it('Signup with Existing UserName', () => {
      cy.visit('/')
      cy.get(Signup.Signupbutton).click();
      cy.get(Signup.Aplhapaylogo).should("be.visible")
      cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
      cy.get(Signup.Usernamefield).should("be.visible").type(Signup.existingUsername);
      cy.get(Signup.phonenumberfield).should("be.visible").type(phoneNumber);
      cy.get(Signup.Emailaddressfield).should("be.visible").type(faker.internet.email());
      cy.get(Signup.Passwordfield).should("be.visible").type(Signup.PasswordData);
      cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.PasswordData);
      cy.get(Signup.clickcreatebutton).should("be.visible").click();
      cy.get(Signup.errormessagepop).should("be.visible").should("have.text","A user with that phone number or email or username already exists")
    
      })
  

      it('Signup with invalid emailformat', () => {
        cy.visit('/')
        cy.get(Signup.Signupbutton).click();
        cy.get(Signup.Aplhapaylogo).should("be.visible")
        cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
        cy.get(Signup.Usernamefield).should("be.visible").type(faker.person.firstName());
        cy.get(Signup.phonenumberfield).should("be.visible").type(phoneNumber);
        cy.get(Signup.Emailaddressfield).should("be.visible").type(Signup.invalidemailformat);
        cy.get(Signup.Passwordfield).should("be.visible").type(Signup.PasswordData);
        cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.PasswordData);
        cy.get(Signup.clickcreatebutton).should("be.visible").click();
        cy.get(Signup.invalidemailerror).should("be.visible").should("have.text", "Hey,just letting you know that your email is quite weird")
        
        })
        it('Signup with Invalid Password', () => {
          cy.visit('/')
          cy.get(Signup.Signupbutton).click();
          cy.get(Signup.Aplhapaylogo).should("be.visible")
          cy.get(Signup.fullnamefield).should("be.visible").type(faker.person.fullName());
          cy.get(Signup.Usernamefield).should("be.visible").type(faker.person.firstName());
          cy.get(Signup.phonenumberfield).should("be.visible").type(phoneNumber);
          cy.get(Signup.Emailaddressfield).should("be.visible").type(faker.internet.email());
          cy.get(Signup.Passwordfield).should("be.visible").type(Signup.invalidpasswordformat);
          cy.get(Signup.confirmpasswordfield).should("be.visible").type(Signup.invalidpasswordformat);
          cy.get(Signup.clickcreatebutton).should("be.visible").click();
          cy.get(Signup.passworderrormessage).should("be.visible").should("have.text", "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
          
        
          })
      

})

