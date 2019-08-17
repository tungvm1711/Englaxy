import React, { Component } from 'react';
import VocabularyList from '../../components/vocabulary/VocabularyList';

class ManageVocabularies extends Component {
  render() {
    console.log("dasd");
    return (
      <div className="ManageVocabulariesPage">
        <div className="container">
          <VocabularyList />
        </div>
      </div>
    );
  }
}

export default ManageVocabularies;
