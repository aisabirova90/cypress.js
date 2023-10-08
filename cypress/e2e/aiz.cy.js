describe('Автотесты на форму логина',function () {
	it('Верный логин и верный пароль',function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1')
		cy.get('#loginButton').click();
		cy.contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();



	})

	it('Восстановление пароля',function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('german@dolnikov.ru');
		cy.get('#restoreEmailButton').click();
		cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();

		
	})

	it('Верный логин и не верный пароль',function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio')
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();

})	
	it('Не верный логин и верный пароль',function () {
	cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german1@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1')
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();

})	

it(' Логин без @ и верный пароль',function () {
	cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('german1dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1')
		cy.get('#loginButton').click();
		cy.contains('Нужно исправить проблему валидации').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();

})

it('Логин со строчными буквами и верный пароль',function () {
	cy.visit('https://login.qa.studio/');
		cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1')
		cy.get('#loginButton').click();
		cy.contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').click();

})	
	
})