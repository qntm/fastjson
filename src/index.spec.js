"use strict";

var fastjson = require(".")

if (fastjson.parse("abdsfsal{}") !== null) {
	throw Error();
}

if (fastjson.stringify("lm995") !== "null") {
	throw Error();
}

// OK
