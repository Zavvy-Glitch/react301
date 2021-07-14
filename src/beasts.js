import React from "react";

class Beasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slayBeast: 0

    };
  }
slayingBeast = () => {
  this.setState({slayBeast: this.state.slayBeast + 1 });
}
  render() {
    return (<>
      <img src={this.props.beast.image_url} onClick={this.slayingBeast} alt={this.props.beast.title}/>
      <h1>{this.props.beast.description}</h1>
      <h2>{this.props.beast.keyword}</h2>
      <h3>{this.props.beast.horns}</h3>
      <span>Times Beast Slayed: {this.state.slayBeast}</span>
      </>
    );
  }
}

export default Beasts;