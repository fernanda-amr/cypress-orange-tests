
import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   
    dashboardPage.checkDashboardPage()
   
    menuPage.accessMyInfo()
   
    myInfoPage.fillPersonalInfo(1, 2, 3)
    myInfoPage.fillEmployeeDetails('Idest01', 'Other02', '12345', '2025-11-23')
    myInfoPage.fillOthers()
    myInfoPage.saveForm()
    
    // menuPage.accessAdmin()
    // menuPage.accessPin()
    // menuPage.accessLeave()
    // menuPage.accessTime()
    // menuPage.accessRecruitment()
    // menuPage.accessPerformance()
    // menuPage.accessDirectory()
    // menuPage.accessClaim()
    // menuPage.accessBuzz()
    // menuPage.accessMyInfo()
    

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
