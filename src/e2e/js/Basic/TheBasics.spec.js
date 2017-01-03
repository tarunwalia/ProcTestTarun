var Testbasic = require('D:/JavaWorkspace/ProcTestTarun/src/e2e/js/Basic/TheBasics.Check.js');

describe("Tarun Class Test", function() {
	console.log('------------Starting test-----------');
	var basicPage;
	beforeEach(function() {
		basicPage = new Testbasic();
		basicPage.browserOpen();
	});
	it("Tarun Test", function() {
		basicPage.inputText();
		var textCh = basicPage.readText();
		console.log(textCh);
		expect(textCh).toEqual("tarun walia");
	});
});