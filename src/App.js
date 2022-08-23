import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("trending");
  }

  onVideoSelect = (video) => {
    console.log("From the app", video);
    this.setState({ ...this.state, selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmitted={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
