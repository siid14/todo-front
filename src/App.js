import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoList from "./pages/ToDoList";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/todolist" component={ToDoList} />
      </Router>
    );
  }
}
export default App;
