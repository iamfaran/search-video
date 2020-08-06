import myapi from "../apis/youtube";
import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyA-qa-p3xetyQNZou4IlESm_XtGiH8deq8";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onSubmitText("mr bean");
  }
  onSubmitText = (searchText) => {
    myapi
      .get("./search", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: KEY,
          q: searchText,
        },
      })
      .then((result) => {
        this.setState({
          videos: result.data.items,
          selectedVideo: result.data.items[0],
        });
      });
  };
  onSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo: selectedVideo });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onCustomSubmit={this.onSubmitText} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail mySelectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectedVideo={this.onSelectedVideo}
                data={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
