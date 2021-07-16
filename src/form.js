import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
 
  changingHorns = (e) => {
    e.preventDefault();
    this.props.changeHorns(e.target.value)
    this.props.rChangeHorns()
  }
  
  onSubmit = (e) => {
   this.props.filter()

  }

  render() {
    return (
      <>
    <Form aria-label="Default select example">
    <select onChange={this.changingHorns}  >
      <option>Select A Number of Horns</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="100">One Hundred</option>
    </select>
      <Button id="button" onClick={this.onSubmit}>SUBMIT</Button>
    </Form>
    </>
    )
  };
}

export default Forms;
 