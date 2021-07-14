import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import heart from './Red-Heart.png';


class Beasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0

    };
  }
favoritedBeast = () => {
  this.setState({
    favorites: this.state.favorites + 1 
  });
}
  render() {
    return (<>
      <h1>{this.props.beast.title}</h1>
      <img src={this.props.beast.image_url} onClick={this.favoritedBeast} alt={this.props.beast.title} width='25%' height='auto'/>
      <h2>{this.props.beast.description}</h2>
      <h3>{this.props.beast.keyword}</h3>
      <h4>{this.props.beast.horns}</h4>
      <span>
        Times favorited: {this.state.favorites}
      </span>
      <img src={heart} alt={'heart'} width='1%'height='auto' />
      </>
    );
  }
}

export default Beasts;