import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function SingleItem() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { itemId } = useParams();
  const location = useLocation();

  return (
    <div>
      <p>
        <Link
          className="button-outline"
          to={`/${location.pathname.split("/")[1]}`}
        >
          Back
        </Link>
      </p>
      <h3>{itemId}</h3>
      <p>Single page!</p>
    </div>
  );
}
