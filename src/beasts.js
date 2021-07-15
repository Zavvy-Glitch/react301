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
  this.props.handleImageClick (this.props.beast.image_url)
}

updateHearts = () => {
  this.setState({
    favorites: this.state.favorites + 1,
  })
  
}
  render() {
    return (<>
      <h1>{this.props.beast.title}</h1>
      <img id='photos' src={this.props.beast.image_url} onClick={this.favoritedBeast} alt={this.props.beast.title} width='25%' height='auto'/>
      <h2>{this.props.beast.description}</h2>
      <h3>{this.props.beast.keyword}</h3>
      <h4>{this.props.beast.horns}</h4>
      <span id='heart'>
        Times favorited: {this.state.favorites}
      <img src={heart} alt={'heart'} width='1%'height='auto' onClick={this.updateHearts} />
      </span>
      </>
    );
  }
}

export default Beasts;