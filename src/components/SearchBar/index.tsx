import React, { useState } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
import styles from "./SearchBar.module.scss";

// Task: Build search functionality that filters the list while typing

const SearchBar = () => {
  const [state, setState] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

export default SearchBar;
