import React from "react";

import Navigation from "../components/shared/Navigation";

export default function ArtPrompts() {
  return (
    <>
      <Navigation activePage="art" />
      <div className="prompt-list-content">
        Here comes the list of art prompts.
      </div>
    </>
  );
}
