"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./index.css");
const FeedBack = ({ goodTest }) => {
    return react_1.default.createElement(react_1.default.Fragment, null, goodTest ? react_1.default.createElement("h1", null, "hello") : react_1.default.createElement("h1", null, "not hello"));
};
exports.default = FeedBack;
