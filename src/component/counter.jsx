import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  ///class bagde
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
  // display value
  formatCode() {
    const { value } = this.props.counter;

    return value === 0 ? "zero" : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return "There are no Tags in the list";

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* Passing Children props */}
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCode()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increament
        </button>
        <button
          className="btn btn-danger  m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <div>{this.state.tags.length === 0 && "Please create a new tags"}</div>
        <h6>{this.renderTags()}</h6>
      </div>
    );
  }
}

export default Counter;

//const Counter = () => {
//   const [count, setState] = useState(0);
//   ///span class
//   const tags = [];
//   const styles = {
//     fontSize: 10,
//     fontWeight: "bold",
//   };

//   const getBadgeClass = () => {
//     let classes = "badge m-2 badge-";
//     classes += count === 0 ? "warning" : "primary";
//     return classes;
//   };

//   ///Tags displays
//   const renderTags = () => {
//     if (tags.length === 0) return "There is no tags in the list";

//     return (
//       <ul>
//         {tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   };

//   ///count check
//   function formatCode() {
//     return count === 0 ? "zero" : count;
//   }
//   return (
//     <div>
//       <span style={styles} className={getBadgeClass()}>
//         {formatCode()}
//       </span>
//       <button className="btn btn-secondary">Increament</button>
//       <div>
//         {tags.length === 0 && "Please create a new tags!"}
//         <h6>{renderTags()}</h6>
//       </div>
//     </div>
//   );
// };
