class MyInfoPage {
  selectorsList() {
    return {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      selectButton: ".oxd-select-text",
      dropdownButton: ".oxd-select-dropdown",
      submitButton: "[type='submit']",
    };
  }

  updateUserInfo(
    firstName,
    lastName,
    nickName,
    employId,
    otherId,
    driverNumber,
    birthDate,
    nationality
  ) {
    const selectors = this.selectorsList();
    cy.get(selectors.firstNameField).clear().type(firstName);
    cy.get(selectors.lastNameField).clear().type(lastName);
    cy.get(selectors.genericField).eq(3).clear().type(nickName);
    cy.get(selectors.genericField).eq(4).clear().type(employId);
    cy.get(selectors.genericField).eq(5).clear().type(otherId);
    cy.get(selectors.genericField).eq(6).clear().type(driverNumber);
    cy.get(selectors.dateField).eq(0).clear().type(birthDate);
    cy.get(selectors.dateCloseButton).click();
    cy.get(selectors.selectButton).eq(0).click();
    cy.get(selectors.dropdownButton).contains(nationality).click();
    cy.get(selectors.submitButton).eq(0).click();
  }
}

export default MyInfoPage;
