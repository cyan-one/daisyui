import React from "react";

function ButtonHTMLTags() {
  return (
      <div>
        <a href="#" role="button" class="btn">Link</a> 
        <button type="submit" class="btn">Button</button> 
        <input type="button" value="Input" class="btn"/> 
        <input type="submit" value="Submit" class="btn"/> 
        <input type="reset" value="Reset" class="btn"/>
      </div>
    );
}
                
export default ButtonHTMLTags;