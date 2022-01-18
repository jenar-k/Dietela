describe('Klien Login ke Dietela', () => {
    it('Klien Login ke Dietela dengan data Email dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailKlienValid();
        cy.passwordKlienValid();
        cy.tombolLogin();
        cy.tombolLogout();
    
    })
    
    it('Klien Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.emailKlienTidakValid();
        cy.passwordKlienValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Klien Login ke Dietela dengan data Email yang Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailKlienValid();
        cy.passwordKlienTidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Klien Login ke Dietela dengan data Email yang Tidak Valid dan Password yang Tidak Valid', () => {
        cy.loginPageDietela();
        cy.emailKlienTidakValid();
        cy.passwordKlienTidakValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Klien Login ke Dietela dengan data Email Kosong (NULL) dan Password yang Valid', () => {
        cy.loginPageDietela();
        cy.passwordKlienValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

    it('Klien Login ke Dietela dengan data Email yang Valid dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.emailKlienValid();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'Password is wrong');
            
    })

    it('Klien Login ke Dietela dengan data Email Kosong (NULL) dan Password Kosong (NULL)', () => {
        cy.loginPageDietela();
        cy.get('[class="css-1c0kz4a"]')
            .click();
        cy.get('[class="css-14wshvh"]')
            .should('exist')
            .should('contains.text', 'User not found');
            
    })

})