import React from 'react';
import Beasts from './beasts';
import data from './data.json';
// import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      testClose:true,
      image:'',
      data: data
    };
  }

handleImageClick = (beastClick) => {
  this.setState({
    testShow: true,
    testClose: false,
    image: beastClick
  });
}
render() {
    return <>
    <Carousel id='carousel' variant="dark">
    {this.state.data.map(currentBeast => {
      return (
       <Carousel.Item>
          <Beasts  handleImageClick={this.handleImageClick} className="d-block w-100" beast={currentBeast}/>
       </Carousel.Item>
        );
        
      })}
    </Carousel>
    <Modal show = {this.state.testShow}>
       <Modal.Header>
       </Modal.Header>
       <Modal.Body>
          <img src={this.state.image} alt=''></img>
       </Modal.Body>
       <Modal.Footer>
       </Modal.Footer>
    </Modal>
    </>
  }
}

export default Main;
