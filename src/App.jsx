import "./styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionTogggle,
  AccordionPanel,
} from "./Accordion/Accordion";
export default function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem id="1">
          <AccordionTogggle>Section 1 </AccordionTogggle>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="2">
          <AccordionTogggle>Section 2 </AccordionTogggle>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
