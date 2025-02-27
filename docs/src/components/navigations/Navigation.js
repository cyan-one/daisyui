import React from "react";

function Navigation() {
  return (
    <div class="rounded-lg shadow bg-base-200 drawer h-52">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="flex flex-col drawer-content">
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div> 
          <div class="flex-1 px-2 mx-2">
            <a class="text-lg font-bold pr-2">
            MintFlow
            </a>
            <span>
            - Change screen size to show/hide menu
            </span>
          </div> 
          <div class="flex-none hidden lg:block">
            <ul class="menu horizontal">
              <li>
                <a class="rounded-btn">Item 1</a>
              </li> 
              <li>
                <a class="rounded-btn">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label> 
        <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <a>Item 1</a>
          </li> 
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    );
}
                
export default Navigation;