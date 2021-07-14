import React from "react";
// import Heart from 'img/Red-Heart.png'; // with require

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
      <h1>{this.props.beast.title}</h1>
      <img src={this.props.beast.image_url} onClick={this.favoritedBeast} alt={this.props.beast.title}/>
      <h2>{this.props.beast.description}</h2>
      <h3>{this.props.beast.keyword}</h3>
      <h4>{this.props.beast.horns}</h4>
      <span>
        {/* <img src={Heart} alt={'heart'} /> */}
        Times favorited: {this.state.favorites}
      </span>
      </>
    );
  }
}

export default Beasts;