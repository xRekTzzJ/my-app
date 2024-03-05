import React, { Component } from "react";

export default class Filters extends Component {
  render() {
    return (
      <ul className="filters" onClick={this.props.onFiltered}>
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}
