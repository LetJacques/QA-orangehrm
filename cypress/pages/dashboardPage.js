class DashboardPage {
  selectorsList() {
    return {
      dashboardGrid: ".orangehrm-dashboard-grid",
      myInfoButton: "[href='/pim/viewMyDetails']",
    };
  }

  validateDashboardPage() {
    const selectors = this.selectorsList();
    cy.get(selectors.dashboardGrid).should("be.visible");
  }

  accessMyInfoPage() {
    const selectors = this.selectorsList();
    cy.get(selectors.myInfoButton).click();
  }
}

export default DashboardPage;
