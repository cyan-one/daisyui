import React from "react";

import ButtonGroup from "../components/buttonsGroup/ButtonGroup";
import ButtonGroupOutline from "../components/buttonsGroup/ButtonGroupOutline";
import RadioButtonGroup from "../components/buttonsGroup/RadioButtonGroup";

function ButtonGroupList() {
  return (
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div class="w-full">
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonGroup />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonGroupOutline />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <RadioButtonGroup />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default ButtonGroupList;