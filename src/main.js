import React from "react";
import Beasts from "./beasts"
import data from "./data.json"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return <>{this.state.data.map(currentBeast => {
      //map takes a function as an argument
        return (<>
       <Beasts beast={currentBeast}/>
        </>);
        
      })
    }</>
  }
}

export default Main;