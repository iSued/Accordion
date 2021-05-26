import React, { useState } from "react";
import "./index.css";
import AccordionOption from "./sub-components/index";

const Accordion = (props: any) => {
  const [isError, setIsError] = useState(true);
  const [openAccordionId, setOpenAccordionId] =
    React.useState<string | null>(null);

  return (
    <>
      {isError ? (
        <div className="errorContainer">
          <p>
            Seleziona massimo <strong>4 aree</strong> di interesse
          </p>
          <p>Potrai modificare le tue scelte di settimana in settimana</p>
        </div>
      ) : null}
      <div className="headerContainer">
        <h4 className="sectionTitle">
          Quale credi che sia il tuo livello di cultura digitale?
        </h4>
      </div>

      <div className="list">
        {[...props.data].map((element) => {
          return (
            <AccordionOption
              id={element[0]}
              isOpen={element[0] === openAccordionId ? true : false}
              title={element[1].title}
              description={element[1].description}
              selected={element[1].selected}
              mandatory={element[1].mandatory}
              selectable={element[1].selectable}
              completed={element[1].completed}
              assigned={element[1].assigned}
              onOpen={(id: string) => {
                if (id === openAccordionId) {
                  setOpenAccordionId(null);
                } else {
                  setOpenAccordionId(id);
                }
              }}
              onSelect={props.toggleCategory}
            />
          );
        })}
      </div>
      <div className="button">
        <button>avanti</button>
      </div>
    </>
  );
};

export default Accordion;
