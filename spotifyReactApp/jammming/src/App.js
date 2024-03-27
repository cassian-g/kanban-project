import React from "react";
import SearchBar from "./SearchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.background}> {/* Use styles.background */}
      <div className={styles.leftsection}> {/* Use styles.leftsection */}
        <SearchBar />
      </div>
      <div className={styles.rightsection}> {/* Use styles.rightsection */}
        <h1>Your Playlist</h1>
      </div>
    </div>
  );
}

export default App;

