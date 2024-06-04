const ShelfCard = (props) => {
  console.log(props.data);
  const { title, edition_count } = props.data;
  const { onRemove } = props;

  return (
    <>
      <div className="card ">
        <div className="card-head">
          <span className="card-head_left">Book Title:</span>
          <span className="card-head_right">{title}</span>
        </div>
        <p>Edition : {edition_count}</p>
        {onRemove && (
          <button onClick={onRemove} className="remove-button">
            Remove
          </button>
        )}
      </div>
    </>
  );
};

export default ShelfCard;
