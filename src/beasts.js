import React from "react";

class Beasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <h1>{this.state.data[0].title}</h1>
      <h2>{this.state.data[0].description}</h2>

    )
  }
}