import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import {getAllWords} from '../../utils/api/words';
import VocabTable from './components/VocabTable.jsx';

class TestingVocabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: null,
      shouldBeRender: true,
      totalFrequency: 0,
      selected: {},
    };
    this.handleGetAll = this
      .handleGetAll
      .bind(this);
  }


  getMeRandomElements(sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  }

  handleChangeField = (e) => {
    console.log(e.target.value);
    console.log(e.target);
    this.setState({
      totalFrequency: this.state.totalFrequency + e.target.value
    });
    console.log(this.state.totalFrequency);
  };

  handleGetAllWords = () => {
    return getAllWords().then((result) => {
      const words = result.data;
      return words;
    })
  };

  async handleGetAll() {
    console.log("hihihihihihi");
    let result = await this.handleGetAllWords();
    await this.setState({words: result});
    console.log(result);
  }

  async componentWillMount() {
    await this.handleGetAll();
  }


  getFrequency = (frequency) => {
    console.log(frequency);
  };

  render() {
    let words = [];
    console.log(this.state.words);
    /*    if (!words.length)
          return null;*/
    //words = this.getMeRandomElements(this.state.words, 40);
    return (
      <div>
        {this.state.words !== null ? <div className="container">
            <div className="row pt-5">
              <div className="col-12 col-lg-6 offset-lg-3">
                <h1 className="text-center">LightBlog</h1>
              </div>
            </div>
            <VocabTable wordsData={this.getMeRandomElements(this.state.words, 40)} getFrequency={this.getFrequency}/>
          </div>
          : <div>
            <p>Loading...</p>
          </div>

        }</div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.home.words,
});

/*const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
});*/

export default connect(mapStateToProps)(TestingVocabPage);
