import * as React from "react";
import { Icon } from "../../assets/FolderIcon";
import "./style.css";

export function SearchBar() {
  return (
    <div className="input-container" style={{}}>
      {Icon.SearchIcon}
      <input className="input" placeholder="Search For Products" />
    </div>
  );
}
