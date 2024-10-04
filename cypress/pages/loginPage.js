class LoginPage {
  selectorsList() {
    return {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      errorAlert: "[role='alert']",
    };
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    const selectors = this.selectorsList();
    cy.get(selectors.usernameField).type(username);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.loginButton).click();
  }
}

export default LoginPage;
