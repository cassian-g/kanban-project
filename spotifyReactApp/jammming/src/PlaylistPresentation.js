import React from "react";
import styles from "./Playlist.module.css";

function PlaylistPresentation() {
  return (
    <div id="playlist" className={styles.tableContainer}>
      <table className={styles.table}>
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

export default PlaylistPresentation;