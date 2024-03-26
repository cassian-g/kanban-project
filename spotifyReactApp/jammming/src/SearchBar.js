import React, { useState } from "react";
import SearchBarPresentation from "./SearchBarPresentation";
import onSearch from "./OnSearch";

function SearchBar() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const searchResults = await onSearch(query);
    setResults(searchResults);
  }

  return (
    <div>
      <SearchBarPresentation
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </div>
  );
}

export default SearchBar;