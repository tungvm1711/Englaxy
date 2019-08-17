import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Audio from '../media/Audio';
import Mark from '../shared/Mark';
import {
  fetch as fetchVocabularies,
  save as saveVocabulary,
  remove as removeVocabulary
} from '../../server/actions/actions';

class Vocabularies extends Component {
  componentDidMount() {
    this.props.fetchVocabularies();
  }

  render() {
    const {
      vocabularies
    } = this.props;

/*    const {
      users: {
        data: {
          _id: userId
        }
      }
    } = this.props;*/

    console.log(this.props);
    const content = vocabularies.map((vocabulary, index) => {
      const {
        _id,
        word,
        audio,
        pronunciation,
        pos,
        definitions,
        examples,
        users = []
      } = vocabulary;

/*      const marked = users.findIndex(item => item === userId) !== -1;

      const markContent = <Mark id={_id} marked={marked} />;*/

      const posContent = pos.map((item, index) => {
        const content = `${index !== 0 ? ', ' : ''}${item}`;
        return <span key={index}>{content}</span>;
      });
      const definitionContent = definitions.map((definition, index) => {
        return <div key={index}>- {definition}</div>;
      });
      const exampleContent = examples.map((example, index) => {
        return <div key={index}>- {example}</div>;
      });

      return (
        <div key={index} className="Vocabulary">
          <div className="Vocabulary-word">{word}</div>
          <div className="Vocabulary-pronunciation">[ {pronunciation} ]</div>
          <div className="Vocabulary-audio"><Audio src={audio} /></div>
          <div className="Vocabulary-title">P.O.S</div>
          <div className="Vocabulary-pos">{posContent}</div>
          <div className="Vocabulary-title">Definitions</div>
          <div className="Vocabulary-definition">{definitionContent}</div>
          <div className="Vocabulary-title">Exmaples</div>
          <div className="Vocabulary-example">{exampleContent}</div>
        </div>
      );
    });

    return (
      <div className="Vocabularies">
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({vocabulary, user}) => {
  return {...vocabulary, user};
};

export default connect(mapStateToProps, {fetchVocabularies})(Vocabularies);