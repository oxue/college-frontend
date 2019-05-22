import React, { Component } from 'react';

class CollegeCard extends Component {
  state = { }

  componentDidMount() {
    this.setState(this.props.university_data);
  }

  render() {
    return (
      <div className="college-card">
            <h2>
              <a href={"https://wikipedia.com" + this.state.wiki_link}>{this.state.university_name}</a>
              <br />
              BRIAN IS MY ROOMIE 3
            </h2>
      </div>
    );
  }
}

export default CollegeCard;
