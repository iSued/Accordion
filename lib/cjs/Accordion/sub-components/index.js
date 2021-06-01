"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Accordion = function (_a) {
    var id = _a.id, isOpen = _a.isOpen, title = _a.title, description = _a.description, selected = _a.selected, 
    // mandatory,
    // selectable,
    // completed,
    // assigned,
    onSelect = _a.onSelect, onOpen = _a.onOpen;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "accordion" },
            react_1.default.createElement("div", { className: "accordionHeader" },
                react_1.default.createElement("div", { className: "accordionTitle" },
                    react_1.default.createElement(CustomRadio, { onSelect: function () {
                            onSelect(id);
                        }, isSelected: selected }),
                    react_1.default.createElement("span", null, title)),
                react_1.default.createElement("span", { className: isOpen ? "basicArrow rotated" : "basicArrow", onClick: function () {
                        onOpen(id);
                    } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronUp }))),
            react_1.default.createElement("div", { className: isOpen ? "panel open" : "panel" },
                react_1.default.createElement("p", null, description)))));
};
var CustomRadio = function (props) {
    return (react_1.default.createElement("div", { className: "customRadio", onClick: props.onSelect },
        react_1.default.createElement("span", { className: "checkedRadio", style: {
                backgroundColor: props.isSelected ? "white" : "blue",
            } })));
};
exports.default = Accordion;
