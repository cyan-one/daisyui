import React from "react";

function BadgeInButton() {
  return (
    <div>
      <button class="btn">
      Version 2.7.0
        <div class="badge ml-2">new</div>
      </button> 
      <button class="btn btn-primary">
            Inbox
        <div class="badge ml-2 badge-outline">3</div>
      </button> 
      <button class="btn btn-secondary btn-outline">
            Notifications
        <div class="badge ml-2 badge-outline">+999</div>
      </button> 
      <button class="btn btn-accent">
            accent
        <div class="badge ml-2 badge-outline">new</div>
      </button>
    </div>
  );
}

export default BadgeInButton;