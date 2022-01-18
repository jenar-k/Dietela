describe('Super Admin Login ke Dietela', () => {
    it('Super Admin Login ke Dietela dengan data Email dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailSAValid();
        cy.passwordSAValid();
        cy.tombolLoginSA();
        cy.tombolLogout();
    
    })
    
    it('Super Admin Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailSATidakValid();
        cy.passwordSAValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Super Admin Login ke Dietela dengan data Email yang Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailSAValid();
        cy.passwordAGTidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Super Admin Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailSATidakValid();
        cy.passwordSATidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Super Admin Login ke Dietela dengan data Email Kosong (NULL) dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.passwordSAValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Super Admin Login ke Dietela dengan data Email yang Valid dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.emailSAValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Super Admin Login ke Dietela dengan data Email Kosong (NULL) dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

})