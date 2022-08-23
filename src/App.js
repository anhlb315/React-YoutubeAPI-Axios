import "./App.css";
import unplash from "./api/unplash";
import React from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
