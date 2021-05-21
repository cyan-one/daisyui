import React from "react";
import ButtonActive from "../components/buttons/ButtonActive";
import ButtonBlock from "../components/buttons/ButtonBlock";

import ButtonBrand from "../components/buttons/ButtonBrand";
import ButtonDisabled from "../components/buttons/ButtonDisabled";
import ButtonDisabledAnnimation from "../components/buttons/ButtonDisabledAnnimation";
import ButtonGlass from "../components/buttons/ButtonGlass";
import ButtonHTMLTags from "../components/buttons/ButtonHTMLTags";
import ButtonIconEnd from "../components/buttons/ButtonIconEnd";
import ButtonIconStart from "../components/buttons/ButtonIconStart";
import ButtonLoading from "../components/buttons/ButtonLoading";
import ButtonLoadingOutline from "../components/buttons/ButtonLoadingOutline";
import ButtonLoadingRounded from "../components/buttons/ButtonLoadingRounded";
import ButtonLoadingSquare from "../components/buttons/ButtonLoadingSquare";
import ButtonOutline from "../components/buttons/ButtonOutline";
import ButtonResponsive from "../components/buttons/ButtonResponsive";
import ButtonRounded from "../components/buttons/ButtonRounded";
import ButtonRoundedOutline from "../components/buttons/ButtonRoundedOutline";
import ButtonSize from "../components/buttons/ButtonSize";
import ButtonSquare from "../components/buttons/ButtonSquare";
import ButtonSquareOutline from "../components/buttons/ButtonSquareOutline";
import ButtonStates from "../components/buttons/ButtonStates";
import ButtonWide from "../components/buttons/ButtonWide";
import ButtonWideLarge from "../components/buttons/ButtonWideLarge";
import ButtonWideSmall from "../components/buttons/ButtonWideSmall";
import ButtonWideTiny from "../components/buttons/ButtonWideTiny";

function ButtonList() {
  return (
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class="w-full">
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonBrand />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonActive />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonOutline />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonDisabled />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonStates />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonResponsive />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonGlass />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonHTMLTags />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonSize />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonWideLarge />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonWide />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonWideSmall />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonWideTiny />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonIconStart />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonIconEnd />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonRounded />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonSquare />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonRoundedOutline />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonSquareOutline />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonBlock />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonLoading />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonLoadingOutline />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonLoadingSquare />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonLoadingRounded />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <ButtonDisabledAnnimation />                                   
                    </div>
                </div>
            </div>
        </div>
    );
}
                
export default ButtonList;