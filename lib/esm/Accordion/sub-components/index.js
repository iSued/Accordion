import React from "react";
import "./index.css";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Accordion = ({ id, isOpen, title, description, selected, 
// mandatory,
// selectable,
// completed,
// assigned,
onSelect, onOpen, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "accordion" },
            React.createElement("div", { className: "accordionHeader" },
                React.createElement("div", { className: "accordionTitle" },
                    React.createElement(CustomRadio, { onSelect: () => {
                            onSelect(id);
                        }, isSelected: selected }),
                    React.createElement("span", null, title)),
                React.createElement("span", { className: isOpen ? "basicArrow rotated" : "basicArrow", onClick: () => {
                        onOpen(id);
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faChevronUp }))),
            React.createElement("div", { className: isOpen ? "panel open" : "panel" },
                React.createElement("p", null, description)))));
};
const CustomRadio = (props) => {
    return (React.createElement("div", { className: "customRadio", onClick: props.onSelect },
        React.createElement("span", { className: "checkedRadio", style: {
                backgroundColor: props.isSelected ? "white" : "blue",
            } })));
};
export default Accordion;
