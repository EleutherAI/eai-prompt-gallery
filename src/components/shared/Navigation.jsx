import React from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router";

import "../../styles/pages.scss";

export default function Navigation() {
  const location = useLocation();

  return (
    <div>
      <h2 className="page-title">Prompt library</h2>
      <h4 className="page-subtitle">
        Explore compilations of the most memorable prompts on AI models.
      </h4>
      <ul className="main-categories-nav">
        <li>
          <Link
            to="/art"
            className={location.pathname === "/art" ? "active" : ""}
          >
            Art
          </Link>
        </li>
        <li>
          <Link
            to="/text"
            className={location.pathname === "/text" ? "active" : ""}
          >
            Text
          </Link>
        </li>
        <li>
          <Link
            to="/code"
            className={location.pathname === "/code" ? "active" : ""}
          >
            Code
          </Link>
        </li>
      </ul>
    </div>
  );
}
