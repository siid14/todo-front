import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }
  render() {
    return (
      <div>
        <h1>To-DoList</h1>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Titre"
            />
          </label>
        </form>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default ToDoList;
