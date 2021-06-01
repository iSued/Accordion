import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles({
    listContainer: {
        width: 400,
        height: "100%",
        backgroundColor: "blue",
        color: "white",
    },
    arrowContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        padding: "1rem",
    },
    arrow: {
        fontSize: "1.5rem",
        cursor: "pointer",
    },
    menuContainer: {
        height: "80%",
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    main: { display: "flex", flexFlow: "column wrap" },
    bottom: { display: "flex", flexFlow: "column wrap" },
    footer: {},
    icon: {},
    menuItemTitle: { marginLeft: "1.5rem" },
    menuItem: { cursor: "pointer" },
    title: {},
});
const SwipeableDrawer = ({ toggled, close, useMenu }) => {
    const menu = useMenu;
    const classes = useStyles();
    const list = () => {
        return (React.createElement("div", { role: "presentation", className: classes.listContainer },
            React.createElement("div", { className: classes.arrowContainer },
                React.createElement(FontAwesomeIcon, { icon: "arrow-left", className: classes.arrow, onClick: () => {
                        close();
                    } })),
            React.createElement("div", { className: classes.menuContainer },
                React.createElement("div", { className: classes.title },
                    React.createElement("h1", null, "Title")),
                React.createElement("div", { className: classes.main }, menu.drawer.main.map((el) => {
                    return (React.createElement("div", { className: classes.menuItem, style: { order: el.order }, onClick: () => {
                            console.log(el.label);
                            close();
                        } },
                        React.createElement("span", { className: classes.icon },
                            React.createElement(FontAwesomeIcon, { icon: el.icon })),
                        React.createElement("span", { className: classes.menuItemTitle }, el.label)));
                })),
                React.createElement("div", { className: classes.bottom }, menu.drawer.bottom.map((el) => {
                    return (React.createElement("div", { className: classes.menuItem, style: { order: el.order }, onClick: () => console.log(el.label) },
                        React.createElement("span", { className: classes.icon },
                            React.createElement(FontAwesomeIcon, { icon: el.icon })),
                        React.createElement("span", { className: classes.menuItemTitle }, el.label)));
                })),
                React.createElement("div", { className: classes.footer }, menu.footer ? React.createElement("div", null, "footer") : null))));
    };
    return (React.createElement("div", null,
        React.createElement(React.Fragment, null,
            React.createElement(Drawer, { variant: "persistent", anchor: "left", open: toggled, onClose: () => {
                    close();
                } }, list()))));
};
export default SwipeableDrawer;
