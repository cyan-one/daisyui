import React from "react";

function ButtonDisabled() {
  return (
      <div>
        <button class="btn" disabled="disabled">neutral</button> 
        <button class="btn btn-primary" disabled="disabled">primary</button> 
        <button class="btn btn-ghost" disabled="disabled">ghost</button> 
        <button class="btn btn-link" disabled="disabled">link</button> 
        <button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">visually disabled</button>
      </div>
    );
}
                
export default ButtonDisabled;