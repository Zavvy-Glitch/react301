import React from 'react';
import Beasts from './beasts';
import data from './data.json';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return <>
    <Carousel variant="dark">
    {this.state.data.map(currentBeast => {
      //map takes a function as an argument
      return (
       <Carousel.Item>
          <Beasts className="d-block w-100" beast={currentBeast}/>
       </Carousel.Item>
        );
        
      })}
    </Carousel>
    </>
  }
}

export default Main;



  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>