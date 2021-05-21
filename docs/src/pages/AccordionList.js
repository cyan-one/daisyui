import React from "react";
import Accordion from "../components/accordions/Accordion";
import AccordionArrow from "../components/accordions/AccordionArrow";
import AccordionBorder from "../components/accordions/AccordionBorder";
import AccordionPlusMinus from "../components/accordions/AccordionPlusMinus";

function AccordionList() {
  return (
      <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <div class="w-full">
            <div class="mb-4">
              <h1>Accordion</h1>
              <Accordion />                                   
            </div>
            <div class="mb-4">
              <h1>Accordion Arrow</h1>
              <AccordionArrow />
            </div>
            <div class="mb-4">
              <h1>Accordion Plus/Minus</h1>
              <AccordionPlusMinus />
            </div>
            <div class="mb-4">
              <h1>Accordion Border</h1>
              <AccordionBorder />
            </div>
        </div>
      </div>
  );
}
                    
export default AccordionList;