import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import IconArrow from "../icons/IconArrow";

import "../styles/singleItem.scss";

export default function SingleItem() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { itemId } = useParams();
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  const [selectedItem, setSelectedItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/promptData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setSelectedItem(
            data.filter((prompt) => prompt.type === category)[itemId]
          );
          console.log(data);
        }
      });
  }, [category, itemId]);

  return (
    <div>
      <p className="back-container">
        <Link
          className="back-link button-outline arrow-left"
          to={`/${location.pathname.split("/")[1]}`}
        >
          <IconArrow className="icon-arrow" /> Back
        </Link>
      </p>

      <div className="single-item-container">
        <div className="single-item-content">
          <p className="single-item-content-prompt">{selectedItem.prompt}</p>
          <p className="single-item-content-completion">
            {selectedItem.completion}
          </p>
        </div>
        {/* <div className="single-item-buttons">
          <button>Share</button>
        </div> */}
        <div className="single-item-details"></div>
      </div>
    </div>
  );
}
