import React, { useEffect, useState } from "react";

import Navigation from "../components/shared/Navigation";
import AssetList from "../components/AssetList/AssetList";

import "../styles/pages.scss";

export default function TextPrompts() {
  const [textPrompts, setTextPrompts] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:3000/api/promptData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setTextPrompts(data.filter((prompt) => prompt.type === "text"));
          console.log(data);
        }
      });
  }, []);
  return (
    <>
      <Navigation />
      <div className="prompt-list-content">
        <AssetList data={textPrompts} type="text" />
      </div>
    </>
  );
}
