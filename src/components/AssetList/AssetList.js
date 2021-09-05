import React from "react";
import { Link, useLocation } from "react-router-dom";

const AssetListItem = ({ data, path }) => {
  return (
    <li key={data.id}>
      <div className="asset-data-body">
        <div className="asset-body-propmt">{data.prompt}</div>
        <div className="asset-body-completion">{data.completion}</div>
        <div className="asset-body-details">
          <p className="asset-body-tags">Tag1, tag2, tag</p>
          <p className="asset-body-link">
            <Link
              className="asset-view-link button-outline"
              to={`${path}/${data.id}`}
            >
              View
            </Link>
          </p>
        </div>
      </div>
      <div className="asset-item-bottom">the prompt information goes here</div>
    </li>
  );
};

export default function AssetList({ data, type, onClick }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="assets-list-container">
      <div className="assets-list-top-navigation">Asset list navigation</div>
      <div className="assets-list-body">
        <ul className={"main-list " + type}>
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return <AssetListItem key={item.id} data={item} path={path} />;
            })}
        </ul>
      </div>
    </div>
  );
}
