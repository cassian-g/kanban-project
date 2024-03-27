import React, { useState, useEffect } from "react";
import styles from "./Track.module.css";

function Track(props) {
  const [selectedTracks, setSelectedTracks] = useState([]);
  
  useEffect(() => {
    console.log(selectedTracks);
  }, [selectedTracks]);
  
  const clickHandler = (prevSelectedTracks) => {
    setSelectedTracks((prevSelectedTracks) => [...prevSelectedTracks]);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.artist}</td>
      <td>{props.album}</td>
      <td>
        <button onClick={() => clickHandler()}>Add</button>
      </td>
    </tr>
  );
}

export default Track;


