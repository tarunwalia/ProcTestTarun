var rep = require('jasmine-reporters');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	directConnect : true,
	framework : 'jasmine',

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		'browserName' : 'chrome'
	},

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs : [ 'D:/JavaWorkspace/ProcTestTarun/src/e2e/js/Basic/TheBasics.spec.js' ],

	onPrepare : function() {		
		jasmine.getEnv().addReporter(new rep.JUnitXmlReporter({
			savePath : 'D:/JavaWorkspace/ProcTestTarun/Reports/XMLReport',
			consolidateAll : true
		}));
		
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'D:/JavaWorkspace/ProcTestTarun/Reports/HTMLReport'
		}));
	}
}