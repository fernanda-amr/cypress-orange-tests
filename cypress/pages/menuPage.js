class MenuPage {

    selectorsList () {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pinButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accessPin() {
        cy.get(this.selectorsList().pinButton).click()
    }

    accessLeave(){
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime(){
        cy.get(this.selectorsList().timeButton).click()   
     }

    accessRecruitment(){
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessPerformance(){
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessDirectory(){
        cy.get(this.selectorsList().directoryButton).click()
    }

    accessClaim(){
        cy.get(this.selectorsList().claimButton).click()
    }

    accessBuzz(){
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage