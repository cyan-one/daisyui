import React from "react";

function RadioButtonGroup() {
  return (
    <div>
      <div class="btn-group">
        <input type="radio" name="options" id="option1" data-title="1" class="btn" /> 
        <input type="radio" name="options" id="option2" data-title="2" checked="checked" class="btn" /> 
        <input type="radio" name="options" id="option3" data-title="3" class="btn" /> 
        <input type="radio" name="options" id="option4" data-title="4" class="btn" /> 
        <input type="radio" name="options" id="option5" data-title="5" class="btn" />
      </div>
    </div>
    );
}
                
export default RadioButtonGroup;