import React, { Component, PropTypes } from 'react';

export default class Spinner extends Component {

  render() {
    const { type } = this.props;
    
    return (
      <div className="Spinner">
        <div className={`Spinner-icon Spinner-${type}`} />
      </div>
    );
  }
}
