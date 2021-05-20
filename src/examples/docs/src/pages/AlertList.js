import React from "react";
import Alert from "../components/alerts/Alert";

function AlertList() {
  return (
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class="w-full">
                    <div class="mb-4">
                        <h1>Accordion</h1>
                        <Alert />                                   
                    </div>              
                </div>
            </div>
        </div>
    );
}
                
export default AlertList;