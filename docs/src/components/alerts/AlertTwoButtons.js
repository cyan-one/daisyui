import React from "react";

function AlertTwoButtons() {
  return (
    <div class="alert">
      <div class="flex-1">
        <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
      </div> 
      <div class="flex-none">
        <button class="btn btn-sm btn-ghost mr-2">Cancel</button> 
        <button class="btn btn-sm btn-primary">Apply</button>
      </div>
    </div>
  );
}

export default AlertTwoButtons;