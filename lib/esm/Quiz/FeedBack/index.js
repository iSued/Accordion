import React from "react";
import "./index.css";
const FeedBack = ({ goodTest }) => {
    return React.createElement(React.Fragment, null, goodTest ? React.createElement("h1", null, "hello") : React.createElement("h1", null, "not hello"));
};
export default FeedBack;
