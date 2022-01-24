var faker = require('faker');

var randomEmail = faker.internet.email();
var randomPassword = faker.internet.password();
var randomFirstName = faker.name.firstName();
var randomLastName = faker.name.lastName();

describe('Register ke Dietela', () => {
    it('Register dengan semua data inputan adalah data valid', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .click();
        cy.get('[class="css-1kjp2z6"]')
            .should('have.text', ' Selamat ')
        cy.get('[class="router-link-active css-1s0a1g"]')
            .click();
    })

    it('Register Tanpa memasukkan nama', () => {
        cy.registerPageDietela();
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled');
    })

    it('Register Tanpa memasukkan Tanggal Lahir', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register tanpa memasukkan Alamat', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register tanpa memasukkan Negara', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Pilih Provinsi');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Pilih Kota');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')

    })

    it('Register tanpa memasukkan Provinsi', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Pilih Kota');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register Tanpa Memasukkan Kota', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register Tanpa memasukkan Kode Pos', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register tanpa memasukkan Telephone', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register tanpa memasukkan email', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="password"]')
            .type('A'+randomPassword+'1'+'!');
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register tanpa memasukkan password', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.contains('Register')
            .should('be.disabled')
    })

    it('Register dengan Password tidak memenuhi requirement', () => {
        cy.registerPageDietela();
        cy.get('[id="FirstName"]')
            .type(randomFirstName);
        cy.get('[id="lastName"]')
            .type(randomLastName);
        cy.get('[id="birthDate"]')
            .click()
            .type('1992-09-02');
        cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('Laki-Laki');
        cy.get('[id="address"]')
            .type('Jalan Sutra no.1')
            .should('have.value', 'Jalan Sutra no.1');
        cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
            .select('Indonesia');
        cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
            .select('DI Yogyakarta');
        cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
            .select('Kota Yogyakarta');
        cy.get('[id="posCode"]')
            .type('55566')
            .should('have.value', '55566');
        cy.get('[id="phone"]')
            .type('082226733843')
            .should('have.value', '082226733843');
        cy.get('[id="email"]')
            .type(randomEmail);
        cy.get('[id="password"]')
            .type('passwordtidakvalid');
        cy.contains('Register')
            .click();
        cy.get('[class="css-vztayo"]')
            .should('exist')
            .should('have.text', ' password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters ')
        })

        it('Register dengan Email tidak memenuhi requirement', () => {
            cy.registerPageDietela();
            cy.get('[id="FirstName"]')
                .type(randomFirstName);
            cy.get('[id="lastName"]')
                .type(randomLastName);
            cy.get('[id="birthDate"]')
                .click()
                .type('1992-09-02');
            cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
                .select('Laki-Laki');
            cy.get('[id="address"]')
                .type('Jalan Sutra no.1')
                .should('have.value', 'Jalan Sutra no.1');
            cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
                .select('Indonesia');
            cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
                .select('DI Yogyakarta');
            cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
                .select('Kota Yogyakarta');
            cy.get('[id="posCode"]')
                .type('55566')
                .should('have.value', '55566');
            cy.get('[id="phone"]')
                .type('082226733843')
                .should('have.value', '082226733843');
            cy.get('[id="email"]')
                .type('emailtidakvalid');
            cy.get('[id="password"]')
                .type('A'+randomPassword+'1'+'!');
            cy.contains('Register')
                .click();
            cy.get('[class="css-vztayo"]')
                .should('exist')
                .should('have.text', ' Validation isEmail on email failed ')
            })

        it('Register dengan Nomor telephone tidak memenuhi requirement', () => {
            cy.registerPageDietela();
            cy.get('[id="FirstName"]')
                .type(randomFirstName);
            cy.get('[id="lastName"]')
                .type(randomLastName);
            cy.get('[id="birthDate"]')
                .click()
                .type('1992-09-02');
            cy.get(':nth-child(4) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
                .select('Laki-Laki');
            cy.get('[id="address"]')
                .type('Jalan Sutra no.1')
                .should('have.value', 'Jalan Sutra no.1');
            cy.get(':nth-child(6) > .css-anmen8 > .css-h5mteb')
                .select('Indonesia');
            cy.get(':nth-child(7) > .css-15frdhg > .css-anmen8 > .css-h5mteb')
                .select('DI Yogyakarta');
            cy.get(':nth-child(8) > .css-anmen8 > .css-h5mteb')
                .select('Kota Yogyakarta');
            cy.get('[id="posCode"]')
                .type('55566')
                .should('have.value', '55566');
            cy.get('[id="phone"]')
                .type('2131231232131')
                .should('have.value', '2131231232131');
            cy.get('[id="email"]')
                .type(randomEmail);
            cy.get('[id="password"]')
                .type('A'+randomPassword+'1'+'!');
            cy.contains('Register')
                .click();
            cy.get('[class="css-vztayo"]')
                .should('exist')
                .should('have.text', ' invalid phone number ')
            })

})

