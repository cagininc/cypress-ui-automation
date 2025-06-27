class RegisterPage {

    sendKeysFirstName(value)
    {
        cy.get('[id="customer.firstName"]').type(value);

        return this;

    }

}

export default RegisterPage