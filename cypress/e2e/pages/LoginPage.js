class LoginPage {

 sendKeysUserName(value) {
    cy.get('[name="username"]').type(value);
    return this;

 }
 sendKeysPassword(value) {
    cy.get('[name="password"]').type(value);
    return this;

 }

 clickLogin(){
    cy.get('[value="Log In"]').click();

 }

}


export default LoginPage;