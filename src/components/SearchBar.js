import React from "react";
export default class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmitted(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Video Search</label>
          <input
            className="field"
            type="text"
            placeholder="Video"
            value={this.state.term}
            onChange={this.onInputChange}
          ></input>
        </form>
      </div>
    );
  }
}
