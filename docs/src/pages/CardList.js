import React from "react";
import Card from "../components/cards/card";

function CardList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <Card />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default CardList;