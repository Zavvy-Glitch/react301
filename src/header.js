import React from 'react';
import './index.css';

class Header extends React.Component{
  render() {
    return (
      <div id='title'>
        <h1 className = 'beastTitle'>Hall of Beasts</h1>
      </div>
    );
  }
}

export default Header;