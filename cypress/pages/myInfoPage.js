class MyInfoPage {
    selectorsList() {
        const selectors ={
            firstNameField: '.orangehrm-firstname',
            middleNameField: '.orangehrm-middlename',
            lastNameField: '.orangehrm-lastname',
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            mariedComboBox: ".oxd-select-dropdown > :nth-child(3)",
            genericComboBox: ".oxd-select-text--arrow",
            itemComboBox: ":nth-child(80) > span",
            dateOfBirthday: ".bi-calendar",
            genderField:".oxd-radio-wrapper",
            submitButton: "[type='submit']",
            message: ".oxd-toast-container",
    
    
        }

        return selectors
    }   
    
    fillPersonalInfo(FirstName, MiddleName, LastName ){
        cy.get(this.selectorsList().firstNameField).clear().type(FirstName)
        cy.get(this.selectorsList().middleNameField).clear().type(MiddleName)
        cy.get(this.selectorsList().lastNameField).clear().type(LastName)
    }

    fillEmployeeDetails( EmployeeId, OtherId, DriversLicenseNumber, LicenseExpiryDate, SSNumber, SinNumber){
        //cy.get(this.selectorsList().genericField).eq(3).clear().type(NickName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(LicenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(SSNumber)
        //cy.get(this.selectorsList().genericField).eq(9).clear().type(SinNumber)
        
    }

     fillOthers(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().itemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().mariedComboBox).click()
        cy.get(this.selectorsList().dateOfBirthday).eq(1).clear().click({ force: true }).type('1989-02-02')

     }

     saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().message).contains("Successfully Updated")
        cy.get('.oxd-toast-close').click()
     }
}

export default MyInfoPage