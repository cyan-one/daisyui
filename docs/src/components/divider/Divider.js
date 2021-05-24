import React from "react";

function Divider() {
  return (
    <div class="flex flex-col w-full">
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
       <div class="divider">OR</div> 
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
    );
}
                
export default Divider;