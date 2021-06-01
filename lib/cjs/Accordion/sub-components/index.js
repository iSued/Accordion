"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./index.css");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Accordion = ({ id, isOpen, title, description, selected, 
// mandatory,
// selectable,
// completed,
// assigned,
onSelect, onOpen, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "accordion" },
            react_1.default.createElement("div", { className: "accordionHeader" },
                react_1.default.createElement("div", { className: "accordionTitle" },
                    react_1.default.createElement(CustomRadio, { onSelect: () => {
                            onSelect(id);
                        }, isSelected: selected }),
                    react_1.default.createElement("span", null, title)),
                react_1.default.createElement("span", { className: isOpen ? "basicArrow rotated" : "basicArrow", onClick: () => {
                        onOpen(id);
                    } },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronUp }))),
            react_1.default.createElement("div", { className: isOpen ? "panel open" : "panel" },
                react_1.default.createElement("p", null, description)))));
};
const CustomRadio = (props) => {
    return (react_1.default.createElement("div", { className: "customRadio", onClick: props.onSelect },
        react_1.default.createElement("span", { className: "checkedRadio", style: {
                backgroundColor: props.isSelected ? "white" : "blue",
            } })));
};
exports.default = Accordion;
