import React from "react";

function ButtonResponsive() {
  return (
      <div>
        <button class="btn btn-xs md:btn-sm lg:btn-md xl:btn-lg">resize your browser</button> 
        <button class="btn btn-square btn-xs md:btn-sm lg:btn-md xl:btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button> 
        <button class="btn btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    );
}
                
export default ButtonResponsive;