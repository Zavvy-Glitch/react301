import React from 'react';

import Beasts from './beasts';

class SelectedBeast extends React.Component {
 
  render() {
    return (
      <div>
        {this.props.allBeasts.map((beast, idx) => (
          <Beasts 
            handleImageClick={this.handleImageClick}
            keyword={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={this.props.displayAsModal}
  />
))}
      
      </div>
    )
  };
}
export default SelectedBeast;