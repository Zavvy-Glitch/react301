import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './data.json';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div className = "app">
        <Header />
        <Main data={this.state.data} />
        <Footer />
      </div>
    );
  }
}


export default App;
