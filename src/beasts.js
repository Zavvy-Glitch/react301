import React from "react";

class Beasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0

    };
  }
favoritedBeast = () => {
  this.setState({favorites: this.state.favorites + 1 });
}
  render() {
    return (<>
      <img src={this.props.beast.image_url} onClick={this.favoritedBeast} alt={this.props.beast.title}/>
      <h1>{this.props.beast.description}</h1>
      <h2>{this.props.beast.keyword}</h2>
      <h3>{this.props.beast.horns}</h3>
      <span>
        Times favorited: {this.state.favorites}
        
      </span>
      </>
    );
  }
}

export default Beasts;