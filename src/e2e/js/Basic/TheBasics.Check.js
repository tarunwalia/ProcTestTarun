var Testbasic = function() {
	this.inputText = function() {
		element(by.model("person.name")).sendKeys("tarun walia");
	}

	this.readText = function() {
		var expectText = element(by.binding("person.name")).getText();
		return expectText;
	}

	this.browserOpen = function() {
		browser.get("http://www.thetestroom.com/jswebapp/");
		//file:///D:/JavaWorkspace/ProcTestTarun/src/main/webapp/Basic/TheBasic.html

	};
};

module.exports = Testbasic;