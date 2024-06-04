const Card = (props) => {
  console.log(props.data);
  const { title, edition_count } = props.data;

  const addToBookshelf = () => {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push({ title, edition_count });
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };
  return (
    <>
      <div className="card">
        <div className="card-head">
          <span className="card-head_left">Book Title:</span>
          <span className="card-head_right">{title}</span>
        </div>
        <p>Edition : {edition_count}</p>

        <button onClick={addToBookshelf}>Add to BookShelf</button>
      </div>
    </>
  );
};

export default Card;
