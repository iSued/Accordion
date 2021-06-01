"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const useStyles = styles_1.makeStyles({
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
        return (react_1.default.createElement("div", { role: "presentation", className: classes.listContainer },
            react_1.default.createElement("div", { className: classes.arrowContainer },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "arrow-left", className: classes.arrow, onClick: () => {
                        close();
                    } })),
            react_1.default.createElement("div", { className: classes.menuContainer },
                react_1.default.createElement("div", { className: classes.title },
                    react_1.default.createElement("h1", null, "Title")),
                react_1.default.createElement("div", { className: classes.main }, menu.drawer.main.map((el) => {
                    return (react_1.default.createElement("div", { className: classes.menuItem, style: { order: el.order }, onClick: () => {
                            console.log(el.label);
                            close();
                        } },
                        react_1.default.createElement("span", { className: classes.icon },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: el.icon })),
                        react_1.default.createElement("span", { className: classes.menuItemTitle }, el.label)));
                })),
                react_1.default.createElement("div", { className: classes.bottom }, menu.drawer.bottom.map((el) => {
                    return (react_1.default.createElement("div", { className: classes.menuItem, style: { order: el.order }, onClick: () => console.log(el.label) },
                        react_1.default.createElement("span", { className: classes.icon },
                            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: el.icon })),
                        react_1.default.createElement("span", { className: classes.menuItemTitle }, el.label)));
                })),
                react_1.default.createElement("div", { className: classes.footer }, menu.footer ? react_1.default.createElement("div", null, "footer") : null))));
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Drawer_1.default, { variant: "persistent", anchor: "left", open: toggled, onClose: () => {
                    close();
                } }, list()))));
};
exports.default = SwipeableDrawer;
