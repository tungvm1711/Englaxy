import React, { Component } from 'react';
import { getAllVocabularies } from '../../utils/API';
/*
import Spinner from '../icons/Spinner';
*/
import Vocabularies from './Vocabularies';
import {
  fetch as fetchVocabularies,
} from '../../server/actions/actions';
class DailyVocabularies extends Component {
  state = {
    vocabularies: null
  }

  componentDidMount() {
    getAllVocabularies().then(vocabularies => this.setState({vocabularies: vocabularies}));

/*    getAllVocabularies().then((vocabularies) => {
      this.setState({ vocabularies });
    });*/
  }

  render() {
    const {
      vocabularies
    } = this.state;

/*    if (!vocabularies) {
      return <Spinner />;
    }*/
    console.log(this.state.vocabularies);
    return (
      <div className="DailyVocabularies">
        <Vocabularies vocabularies={vocabularies} />
      </div>
    );
  }
}

export default DailyVocabularies;
