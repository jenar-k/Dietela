// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Halaman Landing Page
Cypress.Commands.add('landingPageDietela', () => {
    cy.visit('https://dietela.web.project.skyshi.io/#/');
    cy.viewport(1280, 800);
    cy.url()
        .should('include', 'https://dietela.web.project.skyshi.io/#/');
    cy.get('[class="css-1p4nm94"]')
        .should ('have.text', ' Mulai ')
        .should('exist')

})


// Halaman Login
Cypress.Commands.add('loginPageDietela', () => {
    cy.visit('https://dietela.web.project.skyshi.io/#/login');
    cy.viewport(1280, 800);
    cy.url()
        .should('include', 'https://dietela.web.project.skyshi.io/#/login');
    cy.get('[class="css-1qvfifl"]')
        .should ('have.text', ' Selamat Datang ')
        .should('exist')
    cy.get('[id="email"]')
        .should('exist')
    cy.get('[id="password"]')
        .should('exist')
    cy.get('[class="css-1c0kz4a"]')
        .should ('have.text', ' Login ')
        .should('exist')
        
})


// Halaman Register
Cypress.Commands.add('registerPageDietela', () => {
    cy.visit('https://dietela.web.project.skyshi.io/#/register');
    cy.viewport(1280, 800);
    cy.url()
        .should('include', 'https://dietela.web.project.skyshi.io/#/register');
    cy.get('[class="title css-1qvfifl"]')
        .should ('have.text', ' Selamat Datang ')
        .should('exist')

})


// Halaman Lupa Password
Cypress.Commands.add('forgotPasswordPageDietela', () => {
    cy.visit('https://dietela.web.project.skyshi.io/#/forgot-password');
    cy.viewport(1280, 800);
    cy.url()
        .should('include', 'https://dietela.web.project.skyshi.io/#/forgot-password');
    cy.get('[class="css-1qvfifl"]')
        .should ('have.text', ' Lupa Password ')
        .should('exist')
    cy.get('[id="email"]')
        .should('exist')

})

// Klien
Cypress.Commands.add('emailKlienValid', () => {
    cy.get('[id="email"]')
        .type('ini.emailtestdietela@gmail.com')
        .should('have.value', 'ini.emailtestdietela@gmail.com')

})

Cypress.Commands.add('passwordKlienValid', () => {
    cy.get('[id="password"]')
        .type('Dietela123!!!')
        .should('have.value', 'Dietela123!!!')

})


Cypress.Commands.add('emailKlienTidakValid', () => {
    cy.get('[id="email"]')
        .type('ini.emailtidakvalid@gmail.com')
        .should('have.value', 'ini.emailtidakvalid@gmail.com')

})


Cypress.Commands.add('passwordKlienTidakValid', () => {
    cy.get('[id="password"]')
        .type('PassTdkValid!!!')
        .should('have.value', 'PassTdkValid!!!')

})


// Ahli Gizi
Cypress.Commands.add('emailAGValid', () => {
    cy.get('[id="email"]')
        .type('hamzah+n1@skyshi.com')
        .should('have.value', 'hamzah+n1@skyshi.com')

})

Cypress.Commands.add('passwordAGValid', () => {
    cy.get('[id="password"]')
        .type('Hamzah123!!!')
        .should('have.value', 'Hamzah123!!!')

})


Cypress.Commands.add('emailAGTidakValid', () => {
    cy.get('[id="email"]')
        .type('hamzahAG+n1@skyshi.com')
        .should('have.value', 'hamzahAG+n1@skyshi.com')

})


Cypress.Commands.add('passwordAGTidakValid', () => {
    cy.get('[id="password"]')
        .type('PassTdkValid!!!')
        .should('have.value', 'PassTdkValid!!!')

})


// Super Admin
Cypress.Commands.add('emailSAValid', () => {
    cy.get('[id="email"]')
        .type('cahya+superadmin@skyshi.com')
        .should('have.value', 'cahya+superadmin@skyshi.com')

})

Cypress.Commands.add('passwordSAValid', () => {
    cy.get('[id="password"]')
        .type('Cahya123%')
        .should('have.value', 'Cahya123%')

})


Cypress.Commands.add('emailSATidakValid', () => {
    cy.get('[id="email"]')
        .type('cahyaSA+superadmin@skyshi.com')
        .should('have.value', 'cahyaSA+superadmin@skyshi.com')

})


Cypress.Commands.add('passwordSATidakValid', () => {
    cy.get('[id="password"]')
        .type('PassTdkValid!!!')
        .should('have.value', 'PassTdkValid!!!')

})


// Email Klien Ubah Password
Cypress.Commands.add('emailKlienForgotPassValid', () => {
    cy.get('[id="email"]')
        .type('je.perseorangan2@gmail.com')
        .should('have.value', 'je.perseorangan2@gmail.com');

})


Cypress.Commands.add('emailKlienForgotPassTidakValid', () => {
    cy.get('[id="email"]')
        .type('emailforgotnotvalid@gmail.com')
        .should('have.value', 'emailforgotnotvalid@gmail.com');

})


// Email Ahli Gizi Ubah Password
Cypress.Commands.add('emailAGForgotPassValid', () => {
    cy.get('[id="email"]')
        .type('iniakunahligizidietela@gmail.com')
        .should('have.value', 'iniakunahligizidietela@gmail.com');

})


Cypress.Commands.add('emailAGForgotPassTidakValid', () => {
    cy.get('[id="email"]')
        .type('emailahligizinotvalid@gmail.com')
        .should('have.value', 'emailahligizinotvalid@gmail.com');

})


// Email Super Admin Ubah Password
Cypress.Commands.add('emailSAForgotPassValid', () => {
    cy.get('[id="email"]')
        .type('emailsuperadminvalid@gmail.com')
        .should('have.value', 'emailsuperadminvalid@gmail.com');

})


Cypress.Commands.add('emailSAForgotPassTidakValid', () => {
    cy.get('[id="email"]')
        .type('emailsuperadminnotvalid@gmail.com')
        .should('have.value', 'emailsuperadminnotvalid@gmail.com');

})


// Login Klien
Cypress.Commands.add('tombolLogin', () => {
    cy.get('[class="css-1c0kz4a"]')
        .click();
    cy.get('[class="css-ip5s57"]')
        .should('exist');

})


// Login Ahli Gizi
Cypress.Commands.add('tombolLoginAG', () => {
    cy.get('[class="css-1c0kz4a"]')
        .click();
    cy.get('[class="css-x3wokz"]')
        .should('exist');

})


// Login Super Admin
Cypress.Commands.add('tombolLoginSA', () => {
    cy.get('[class="css-1c0kz4a"]')
        .click();
    cy.get('[class="css-0"]')
        .should('contains.text', 'Dashboard')
        .should('exist');

})


// Logout
Cypress.Commands.add('tombolLogout', () => {
    cy.get('[class="css-14gmh54"]')
        .click();
    cy.get('[class="css-1s43uw1"]')
        .click();
    cy.url()
        .should('include', 'https://dietela.web.project.skyshi.io/#/');

})