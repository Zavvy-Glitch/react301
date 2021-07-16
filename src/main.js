import React from 'react';
import Beasts from './beasts';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './index.css';
import Card from 'react-bootstrap/Card';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      image:'',
     
      
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
    <div id = 'cardsArray'>
    <Card className="bg-dark text-white" style={{ width: '90rem' }}>
    {this.props.data.map(currentBeast => {
      return (
        <Card.Body>
      <Card.Text >
          <Beasts handleImageClick={this.handleImageClick} className="d-block w-100" beast={currentBeast}/>
      </Card.Text>
    </Card.Body>
        ); 
      })}
    </Card>
    </div>
  
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
