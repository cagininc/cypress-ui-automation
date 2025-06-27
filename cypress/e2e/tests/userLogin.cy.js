/// <reference types="cypress" />

import BaseLibrary from "../Base/BaseLibrary";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Loginpage";


context('Login', () => {
  const loginPage = new LoginPage();
const homePage=new HomePage();
const baseLibrary=new BaseLibrary();
  it('Basarili kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider

    loginPage.sendKeysUserName('ssomkan')
    // cy.get('[name="username"]').type('ssomkan');
    loginPage.sendKeysPassword('serat123')
    // cy.get('[name="password"]').type('serat123');
    // cy.get('[value="Log In"]').click();

    loginPage.clickLogin();

// homePage.WelcomeTextControl('hosgeldin')

  })

  it('Basarisiz kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[name="password"]').type('123');
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please valid password');
  })

  it('Zorunlu alan kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please enter a username and password.');
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please enter a username and password.');
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[name="password"]').type('serat123');
    cy.get('[value="Log In"]').click();
    cy.get('[id="leftPanel"] p').should('have.text','Welcome Serat Somkan');
  })
  
})
