import React, { Component } from "react";
import {getXhr} from '../lib/util';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = { searchForCollegeName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // let collegeSearchForm = document.getElementsByClassName("college-search-form")[0];
    // collegeSearchForm.addEventi
  }

  handleSubmit(event) {
    console.log("submit")
    getXhr("http://localhost:3000/blackademias", res=>{
      if(res.map(blackademia=>blackademia.college_name).includes(this.state.searchForCollegeName)){
        alert("your classmates are active on Blackademia!");
      }else{
        alert("your classmates are not yet active on Blackademia!");
      }
    });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ searchForCollegeName: event.target.value });;
  }

  render() {
    return (<div className="Home">
      <div className="home-banner">
        <div className="banner-text">
          <h1>Blackademia</h1>
          <h3>For students, by students</h3>
        </div>
        <div className="home-college-search-box">
          <form className="college-search-form" onSubmit={this.handleSubmit}>
            <label className="sr-only" htmlFor="inlineFormInputGroup">College</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <button className="btn btn-secondary" type="submit">🔎</button>
              </div>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Search for your college now"></input>
            </div>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default Home;