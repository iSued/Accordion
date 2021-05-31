import React from "react";
import "./index.css";
declare const Accordion: React.FC<{
    id: string;
    isOpen: boolean;
    title: string;
    description: string;
    selected: boolean;
    mandatory: boolean;
    selectable: boolean;
    completed: boolean;
    assigned: boolean;
    onSelect: (id: string) => void;
    onOpen: (id: string) => void;
}>;
export default Accordion;
