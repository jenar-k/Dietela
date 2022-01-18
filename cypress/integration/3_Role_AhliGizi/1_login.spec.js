describe('Ahli Gizi Login ke Dietela', () => {
    it('Ahli Gizi Login ke Dietela dengan data Email dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailAGValid();
        cy.passwordAGValid();
        cy.tombolLoginAG();
        cy.tombolLogout();
    
    })
    
    it('Ahli Gizi Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailAGTidakValid();
        cy.passwordAGValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Ahli Gizi Login ke Dietela dengan data Email yang Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailAGValid();
        cy.passwordAGTidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Ahli Gizi Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailAGTidakValid();
        cy.passwordAGTidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Ahli Gizi Login ke Dietela dengan data Email Kosong (NULL) dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.passwordAGValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Ahli Gizi Login ke Dietela dengan data Email yang Valid dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.emailAGValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Ahli Gizi Login ke Dietela dengan data Email Kosong (NULL) dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

})