A small babel plugin to enable es6-class prop-decorators (or an equivalent), before I realized this is already possible using this plugin: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy

I knew it worked for method decorators, but props weren't working for me; found out just a few minutes ago that I just had the plugin order wrong, with it and the "babel-plugin-class-properties" package. (it even said so right on the github page -_-)

Oh well. May have been worth it, since now I know how to build my own Babel plugins. (and I learned it pretty quick/efficiently, if I do say so myself--in other words, no time lost on annoying debugging or the like)

Note that the package.json files and such are messed-up/not-configured. When your work becomes useless, you kinda lose motivation to get it set up nicely.

Example
==========
Source:
----------
```
class Test1 {
	@PropDecorator1
	prop1 = "val1";
	@PropDecorator2("test1", test2)
	prop2 = "val2";
}
```

Result:
----------
```
class Test1 {
	constructor() {
		this.prop1 = "val1";
		this.prop2 = "val2";
	}
}

PropDecorator2(Test1, "prop2", "test1", test2)
PropDecorator1(Test1, "prop1")
```

Installation
==========
```
npm install
```

Testing
==========
```
node Run.js Example.jsx
```