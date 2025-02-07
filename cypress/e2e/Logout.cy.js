import {Logout} from "/cypress/fixtures/selector.js";
const access = require("./Login.cy.js");
describe(" Log out flow", function () {
  beforeEach(function () {
      cy.visit("/")
      access.Login();
      });
      it('user should be able to logout', () => {
      cy.get(Logout.Aplhapaylogo).should("be.visible")
      cy.get(Logout.headermessage).should("not.be.NaN").should("be.visible");
      cy.get(Logout.Accountbalance).should("be.visible").should("have.text", "NGN 0.00");
      cy.get(Logout.Profileicon).should("be.visible").click()
      cy.get(Logout.logoutbutton).should("be.visible").click()
      cy.get(Logout.Aplhapaylogo).should("be.visible")
      cy.get(Logout.Loginheaderinfo).should("be.visible").should("have.text", "Welcome back, Please log in to your account to access your dashboard");
})

})