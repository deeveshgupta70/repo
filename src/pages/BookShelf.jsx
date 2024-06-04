import React, { useState, useEffect } from "react";
import ShelfCard from "../Components/ShelfCard";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (index) => {
    let updatedBookshelf = [...bookshelf];
    updatedBookshelf.splice(index, 1);
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf-container">
      <h3 className="bookshelf-title">My Bookshelf</h3>
      <div className="books">
        {bookshelf.length > 0 ? (
          bookshelf.map((item, index) => (
            <ShelfCard
              data={item}
              onRemove={() => removeFromBookshelf(index)}
            />
          ))
        ) : (
          <div className="no-results">No books in your bookshelf</div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
