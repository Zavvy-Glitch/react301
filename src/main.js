import React from 'react';
import Beasts from './beasts';
import data from './data.json';
import {Container, Row, Col} from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './index.css';
import Card from 'react-bootstrap/Card'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      image:'',
      data: data,
      
    };
  }

handleImageClick = (beastClick) => {
  this.setState({
    test: true,
    image: beastClick
  });
}

handleImageClose = () => {
  this.setState({
    test:false
  })
}
render() {
    return <>
    {/* <Carousel fade> */}
    <Card className="bg-dark text-white" style={{ width: '119rem' }}>
    {this.state.data.map(currentBeast => {
      return (
        <Card.Body>
       {/* <Carousel.Item> */}
      <Card.Text >
          <Beasts handleImageClick={this.handleImageClick} className="d-block w-100" beast={currentBeast}/>
      </Card.Text>
       {/* </Carousel.Item> */}
    </Card.Body>
        );
        
      })}

    </Card>
    {/* </Carousel> */}
  
  
  

    <Modal show = {this.state.test} onHide = {this.handleImageClose}>
       <Modal.Header>
         <Button onClick = {this.handleImageClose}>X</Button>
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
