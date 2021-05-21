import React from "react";

function AvatarCirclePlaceholder() {
  return (
    <div>
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-32 h-32">
          <span class="text-3xl">K</span>
        </div>
      </div> 
      <div class="avatar online placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
          <span class="text-xl">JO</span>
        </div>
      </div> 
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
          <span>MX</span>
        </div>
      </div> 
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
          <span>AA</span>
        </div>
      </div>
    </div>
  );
}

export default AvatarCirclePlaceholder;