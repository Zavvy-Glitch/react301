import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './data.json';
import './index.css';
import Forms from './form.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      changeHorns: 0
    };
  }

    setChangeHorns = (val) =>
      this.setState({
        changeHorns: parseInt(val),
      })
      
    resetChangeHorns = () =>
      this.setState({
        data: data
      })

    filter = () => {
    const filteringHorns = this.state.data.filter ( (beast) => beast.horns === this.state.changeHorns)
    console.log(filteringHorns)
    this.setState({data: filteringHorns})
    }

  render() {
    return (
      <div className = "app">
        <Header />
        <Forms rChangeHorns={this.resetChangeHorns} changeHorns={this.setChangeHorns} filter={this.filter} />
        <Main data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
