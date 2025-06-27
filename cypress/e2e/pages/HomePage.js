class HomePage {


WelcomeTextControl(text){
    cy.get('[id="leftPanel"] p').should('be.visible')
    .and('containtext',text);

    return this;
}


}

export default HomePage;