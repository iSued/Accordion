import React from "react";
import "./index.css";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var Accordion = function (_a) {
    var id = _a.id, isOpen = _a.isOpen, title = _a.title, description = _a.description, selected = _a.selected, mandatory = _a.mandatory, selectable = _a.selectable, completed = _a.completed, assigned = _a.assigned, onSelect = _a.onSelect, onOpen = _a.onOpen;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "accordion" },
            React.createElement("div", { className: "accordionHeader" },
                React.createElement("div", { className: "accordionTitle" },
                    React.createElement(CustomRadio, { onSelect: function () {
                            onSelect(id);
                        }, isSelected: selected }),
                    React.createElement("span", null, title)),
                React.createElement("span", { className: isOpen ? "basicArrow rotated" : "basicArrow", onClick: function () {
                        onOpen(id);
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faChevronUp }))),
            React.createElement("div", { className: isOpen ? "panel open" : "panel" },
                React.createElement("p", null, description)))));
};
var CustomRadio = function (props) {
    return (React.createElement("div", { className: "customRadio", onClick: props.onSelect },
        React.createElement("span", { className: "checkedRadio", style: {
                backgroundColor: props.isSelected ? "white" : "blue",
            } })));
};
export default Accordion;
