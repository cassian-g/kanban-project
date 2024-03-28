import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Results</h2>
      <div className={styles.tracklistContainer}>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
      </div>
    </div>
  );
}

export default SearchResults;
