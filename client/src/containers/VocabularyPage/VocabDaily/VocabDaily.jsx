import React, { Component } from 'react';
import DailyVocabularies from '../../../components/vocabulary/DailyVocabularies';

class ManageVocabularies extends Component {
  render() {
    console.log("dasd");
    return (
      <div className="ManageVocabulariesPage">
        <div className="container">
          <DailyVocabularies />
        </div>
      </div>
    );
  }
}

export default ManageVocabularies;
