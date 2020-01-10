import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
  "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
  "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

class App extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.index === 4) {
        this.setState(state => {
          return { index: 0 };
        });
      } else {
        this.setState(state => {
          return { index: state.index + 1 };
        });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Gallery
        style={{
          background: "black",
          height: "100vh",
          width: "100vw"
        }}
        index={this.state.index}
        onRequestChange={i => {
          this.setState(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    );
  }
}

export default App;
