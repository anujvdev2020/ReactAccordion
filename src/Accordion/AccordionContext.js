import React, { useContext } from "react";

export const AccordionContext = React.createContext(null);
export const AccordionItemContext = React.createContext(null);

export function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }
  return context;
}

export function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext);
  if (context === undefined) {
    throw new Error(
      "useAccordionItemContext must be used within an AccordionProvider"
    );
  }
  return context;
}
