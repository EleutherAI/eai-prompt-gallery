import React, { useEffect, useState } from "react";

import Navigation from "../components/shared/Navigation";
import AssetList from "../components/AssetList/AssetList";

import "../styles/pages.scss";

export default function ArtPrompts() {
  const [artPrompts, setArtPrompts] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:3000/api/promptData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setArtPrompts(data.filter((prompt) => prompt.promptType === "art"));
          console.log(data);
        }
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="prompt-list-content">
        Here comes the list of art prompts.
        <AssetList data={artPrompts} type="art" />
      </div>
    </>
  );
}
