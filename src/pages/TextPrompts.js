import React from "react";

import Navigation from "../components/shared/Navigation";

import "../styles/pages.scss";

export default function TextPrompts() {
  return (
    <>
      <Navigation />
      <div className="prompt-list-content">
        Here comes the list of text prompts.
      </div>
    </>
  );
}
