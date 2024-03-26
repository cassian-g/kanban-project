import React, { useState } from "react";
import SearchBarPresentation from "./SearchBarPresentation";
import styles from "./SearchBar.module.css";

function SearchBar() {
  
  const [query, setQuery] = useState('');

  function handleChange(event) {
    setQuery(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const onSearch = () => {
      console.log('Searched for', query)
    }
    onSearch(query);
  }

  
  return (
    <div>
      <SearchBarPresentation 
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default SearchBar;