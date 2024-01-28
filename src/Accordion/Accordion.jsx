import React, { useState } from "react";

import {
  AccordionContext,
  useAccordionContext,
  AccordionItemContext,
  useAccordionItemContext,
} from "./AccordionContext";

export const AccordionPanel = ({ children }) => {
  const { activePanel } = useAccordionContext();
  const { id } = useAccordionItemContext();
  if (id !== activePanel) {
    return null;
  }

  return <div>{children}</div>;
};

export const AccordionTogggle = ({ children }) => {
  const { handlePanelClick } = useAccordionContext();
  const { id } = useAccordionItemContext();
  return (
    <button
      onClick={() => handlePanelClick(id)}
      style={{
        width: "100%",
        height: "30px",
        border: "1px solid #ebebeb",
        textAlign: "left",
        padding: "0px 20px",
      }}
    >
      {children}
    </button>
  );
};

export const AccordionItem = ({ id, children }) => {
  const value = {
    id,
  };
  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const Accordion = ({ children }) => {
  const [activePanel, setActivePanel] = useState(null);
  const value = {
    handlePanelClick: setActivePanel,
    activePanel,
  };
  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};
