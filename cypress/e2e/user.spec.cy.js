import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MyInfoPage from "../pages/myInfoPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it("User Info - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );

    cy.location("pathname").should("equal", "/dashboard/index");

    dashboardPage.validateDashboardPage();
    dashboardPage.accessMyInfoPage();

    myInfoPage.updateUserInfo(
      "FirstNameTest",
      "LastNameTest",
      "NickNameTest",
      "EmployTest",
      "OtherIdTest",
      "DriverNumberTest",
      "2030-01-01",
      "Russian"
    );

    cy.get("body").should("contain", "Successfully Updated");
  });

  it("Login - Fail", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    cy.get(loginPage.selectorsList().errorAlert).should("be.visible");
  });
});
