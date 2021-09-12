import React from "react";
import { Link, useLocation } from "react-router-dom";
import IconArrow from "../../icons/IconArrow";
import IconBrain from "../../icons/IconBrain";
import Loader from "../shared/Loader";

import "../../styles/assetList.scss";

const AssetListItem = ({ data, path }) => {
  return (
    <li key={data.id} className="asset-data-body">
      <div className="asset-body-category">
        <span className="category-text">{data.category}</span>
      </div>
      <div className="asset-body-title">{data.title}</div>
      <div className="asset-body-prompt">"{data.prompt}"</div>
      <div className="asset-body-details">
        <p className="asset-body-tags">
          {data.tags.map((item, index) =>
            index < data.tags.length - 1 ? item + ", " : item
          )}
        </p>
        <p className="asset-body-link">
          <Link
            className="asset-view-link button-outline arrow-right"
            to={`${path}/${data.id}`}
          >
            View <IconArrow className="icon-arrow" />
          </Link>
        </p>
      </div>
      <div className="asset-item-bottom">
        <div className="asset-item-bottom-left">
          <div className="asset-bottom-model-name">
            <IconBrain className="model-icon" />
            <span className="model-name">{data.modelName}</span>
          </div>
        </div>
        <div className="asset-item-bottom-right">{data.author}</div>
      </div>
    </li>
  );
};

export default function AssetList({ data, type }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="assets-list-container">
      {/* <div className="assets-list-top-navigation">Asset list navigation</div> */}
      <div className="assets-list-body">
        {!data && <Loader />}
        {data?.length === 0 && (
          <div className="no-assets-message">No assets found</div>
        )}
        <ul className={"main-list " + type}>
          {data?.length > 0 &&
            data.map((item) => {
              return <AssetListItem key={item.id} data={item} path={path} />;
            })}
        </ul>
      </div>
    </div>
  );
}
