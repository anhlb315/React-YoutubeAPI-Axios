import React from "react";

export default class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.alt} src={this.props.src}></img>
      </div>
    );
  }
}
