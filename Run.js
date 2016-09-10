// run.js
var fs = require("fs");
var babel = require("babel-core");

//var plugin_classProperties = require("babel-plugin-transform-class-properties");
var plugin_propDecorators = require("./src/Main").default;
//var plugin_decoratorsLegacy = require("babel-plugin-transform-decorators-legacy").default;

// read the filename from the command line arguments
var fileName = process.argv[2];

// read the code from this file
fs.readFile(fileName, function(err, data) {
	if(err) throw err;

	// convert from a buffer to a string
	var src = data.toString();

	// use our plugin to transform the source
	var out = babel.transform(src, {
		//plugins: [plugin_decoratorsLegacy, plugin_propDecorators, plugin_classProperties]
		plugins: [plugin_propDecorators]
	});

	// print the generated code to screen
	console.log(out.code);
});