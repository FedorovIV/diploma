"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3003);
app.listen(PORT, function () { return console.log("Switcher \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443: ".concat(PORT)); });
