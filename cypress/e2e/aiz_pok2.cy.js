describe('Покупка аватара', function () {
  it('Авторизация и покупка аватара', function () {
    cy.visit('https://pokemonbattle.me/login');
    cy.get(':nth-child(1) > .auth__input').type('aisabirova90@gmail.com');
    cy.get('#password').type('Qwerty123');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').should('be.visible').click();
    cy.get(':nth-child(4) > .shop__button').then(($button) => {
      if ($button.length === 0) {
        cy.get(':nth-child(3) > .shop__button').click();
      } else {
        $button.click();
      }
    });
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100 0000 0000 0008');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');
    cy.get('.pay-btn').should('be.visible').click();
    cy.get('#cardnumber').should('be.visible').type('56456');
    cy.get('.payment__submit-button').should('be.visible').click()
    cy.contains('Покупка прошла успешно').should('be.visible');
    cy.get('.payment__adv').click();
  });
});
