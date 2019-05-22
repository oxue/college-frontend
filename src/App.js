import React, { Component } from "react";
import "./styles/App.scss";
import CollegeCard from "./CollegeCard.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import {getXhr} from './lib/util';

console.log(getXhr);


class Colleges extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    universities: []
  };

  componentDidMount() {
    getXhr("http://localhost:3000/colleges", (res)=>{
      this.setState({ universities: res });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="card-container">
          {this.state.universities.map(university => (
            <CollegeCard university_data={university} key={university._id} />
          ))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <span className="navigation-link">
                <Link to="/">Home</Link>
              </span>
              <span className="navigation-link">
                <Link to="/colleges/">Colleges</Link>
              </span>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/colleges/" exact component={Colleges} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
