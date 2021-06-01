"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.css");
const index_1 = __importDefault(require("./sub-components/index"));
// const useCategoryHook = () => {
//   const [data, setData] = useState({
//     cat1: {
//       catId: "cat1",
//       title: "Titolo1",
//       description: "Descrizione 1",
//       selected: false,
//       mandatory: false,
//       selectable: false,
//       completed: true,
//       assigned: false,
//     },
//     cat2: {
//       catId: "cat2",
//       title: "Titolo2",
//       description: "Descrizione 2",
//       selected: false,
//       mandatory: false,
//       selectable: false,
//       completed: true,
//       assigned: false,
//     },
//     cat3: {
//       catId: "cat3",
//       title: "Titolo3",
//       description: "Descrizione 3",
//       selected: false,
//       mandatory: false,
//       selectable: false,
//       completed: true,
//       assigned: false,
//     },
//     cat4: {
//       catId: "cat4",
//       title: "Titolo4",
//       description: "Descrizione 4",
//       selected: false,
//       mandatory: false,
//       selectable: false,
//       completed: true,
//       assigned: false,
//     },
//   });
//   const toggleCategory = (catId: string) => {
//     let newData: any = { ...data };
//     newData[catId].selected = !newData[catId].selected;
//     setData({ ...newData });
//   };
//   return { data: new Map(Object.entries(data)), toggleCategory };
// };
const InterestsPage = (props) => {
    const { data, toggleCategory } = props;
    // data
    // error
    // toggleCategory(idCategoria) => void
    const [isError] = react_1.useState(true);
    const [openAccordionId, setOpenAccordionId] = react_1.default.useState(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isError ? (react_1.default.createElement("div", { className: "errorContainer" },
            react_1.default.createElement("p", null,
                "Seleziona massimo ",
                react_1.default.createElement("strong", null, "4 aree"),
                " di interesse"),
            react_1.default.createElement("p", null, "Potrai modificare le tue scelte di settimana in settimana"))) : null,
        react_1.default.createElement("div", { className: "headerContainer" },
            react_1.default.createElement("h4", { className: "sectionTitle" }, "Quale credi che sia il tuo livello di cultura digitale?")),
        react_1.default.createElement("div", { className: "list" }, [...data].map((element) => {
            return (react_1.default.createElement(index_1.default, { id: element[0], isOpen: element[0] === openAccordionId ? true : false, title: element[1].title, description: element[1].description, selected: element[1].selected, mandatory: element[1].mandatory, selectable: element[1].selectable, completed: element[1].completed, assigned: element[1].assigned, onOpen: (id) => {
                    if (id === openAccordionId) {
                        setOpenAccordionId(null);
                    }
                    else {
                        setOpenAccordionId(id);
                    }
                }, onSelect: toggleCategory }));
        })),
        react_1.default.createElement("div", { className: "button" },
            react_1.default.createElement("button", null, "avanti"))));
};
exports.default = InterestsPage;
