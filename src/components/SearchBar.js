import React from "react";

class SearchBar extends React.Component {
  state = {
    searchText: "",
  };
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  onInputSubmit = (e) => {
    e.preventDefault();
    this.props.onCustomSubmit(this.state.searchText);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              name="first-name"
              placeholder="First Name"
              value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
