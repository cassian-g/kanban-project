import React from "react";
import Track from "./Track";
import styles from "./SearchResults.module.css";

function SearchResultsPresentation(props) {
  return (
    <div id="test" className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
            <Track
              key={result.id}
              name={result.name}
              artist={result.artist}
              album={result.album}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResultsPresentation;

