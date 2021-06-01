import React, { useState } from "react";
import "./index.css";
import AccordionOption from "./sub-components/index";
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
    const [isError] = useState(true);
    const [openAccordionId, setOpenAccordionId] = React.useState(null);
    return (React.createElement(React.Fragment, null,
        isError ? (React.createElement("div", { className: "errorContainer" },
            React.createElement("p", null,
                "Seleziona massimo ",
                React.createElement("strong", null, "4 aree"),
                " di interesse"),
            React.createElement("p", null, "Potrai modificare le tue scelte di settimana in settimana"))) : null,
        React.createElement("div", { className: "headerContainer" },
            React.createElement("h4", { className: "sectionTitle" }, "Quale credi che sia il tuo livello di cultura digitale?")),
        React.createElement("div", { className: "list" }, [...data].map((element) => {
            return (React.createElement(AccordionOption, { id: element[0], isOpen: element[0] === openAccordionId ? true : false, title: element[1].title, description: element[1].description, selected: element[1].selected, mandatory: element[1].mandatory, selectable: element[1].selectable, completed: element[1].completed, assigned: element[1].assigned, onOpen: (id) => {
                    if (id === openAccordionId) {
                        setOpenAccordionId(null);
                    }
                    else {
                        setOpenAccordionId(id);
                    }
                }, onSelect: toggleCategory }));
        })),
        React.createElement("div", { className: "button" },
            React.createElement("button", null, "avanti"))));
};
export default InterestsPage;
