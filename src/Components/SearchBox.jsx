import React, { useState, useCallback } from "react";
import Card from "./Card";
import debounce from "lodash/debounce";

const SearchBox = () => {
  const [book, setBook] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`
          );
          const data = await res.json();
          setList(data.docs);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      } else {
        setList([]);
      }
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setBook(searchTerm);
    debouncedSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <h3 className="search-title">Search by book name:</h3>

      <div className="search">
        <input type="text" value={book} onChange={handleInputChange} />
      </div>

      <div className="books">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : list.length > 0 ? (
          list.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
