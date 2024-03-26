import React from "react";
import styles from "./SearchBar.module.css"; // Import CSS module styles

function SearchBarPresentation(props) {
  return (
    <>
      <div className={styles.header}>
        <h1>Jamming</h1>
      </div>

      <div className={styles.searchbar}>
        <form className={styles["search-form"]} onSubmit={props.handleSubmit}>
          <input
            type="text"
            id="searchInput"
            className={styles["search-input"]}
            value={props.query}
            onChange={props.handleChange}
            placeholder="What do you want to play?"
          />
          <button type="submit" className={styles["search-button"]}>
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBarPresentation;

