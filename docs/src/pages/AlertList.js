import React from "react";
import Alert from "../components/alerts/Alert";
import AlertInfo from "../components/alerts/AlertInfo";
import AlertSuccess from "../components/alerts/AlertSuccess";
import AlertWarning from "../components/alerts/AlertWarning";
import AlertError from "../components/alerts/AlertError";
import AlertTwoButtons from "../components/alerts/AlertTwoButtons";
import AlertButton from "../components/alerts/AlertButton";
import AlertText from "../components/alerts/AlertText";

function AlertList() {
  return (
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class="w-full">
                    <div class="mb-4">
                        <h1>Alert</h1>
                        <Alert />                                   
                    </div>        
                    <div class="mb-4">
                        <h1>Alert State Info</h1>
                        <AlertInfo />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert State Success</h1>
                        <AlertSuccess />                                   
                    </div> 
                    <div class="mb-4">
                        <h1>Alert State Warning</h1>
                        <AlertWarning />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert State Error</h1>
                        <AlertError />                                   
                    </div>    
                    <div class="mb-4">
                        <h1>Alert with two Buttons</h1>
                        <AlertTwoButtons />                                   
                    </div>  
                    <div class="mb-4">
                        <h1>Alert with Button</h1>
                        <AlertButton />                                   
                    </div>
                    <div class="mb-4">
                        <h1>Alert with Text</h1>
                        <AlertText />                                   
                    </div>     
                </div>
            </div>
        </div>
    );
}
                
export default AlertList;