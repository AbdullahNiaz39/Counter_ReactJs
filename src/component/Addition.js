import React, { useState } from "react";

const Addition = (props) => {
  const { onDelete, onIncrement, counter } = props;
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  /// badgeColor
  const getBadgeClass = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  ///Count functionality
  function formatCode() {
    return props.counter.value === 0 ? "zero" : props.counter.value;
  }

  ///Tags Functionality
  const renderTags = () => {
    if (tags.length === 0) return "There is no tags in the list";

    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  ///Rendering
  return (
    <div>
      <span style={styles} className={getBadgeClass()}>
        {formatCode()}
      </span>
      <button
        className="btn btn-secondary"
        onClick={() => onIncrement(counter)}
      >
        Increament
      </button>
      <button
        className="btn btn-danger  m-2"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
      <div>
        {tags.length === 0 && "Please create a new tags!"}
        <h6>{renderTags()}</h6>
      </div>
    </div>
  );
};

export default Addition;
