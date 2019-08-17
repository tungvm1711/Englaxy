import React from 'react';
import {getKeyWord} from '../../utils/api/words';
import ReactTable from "react-table";
import PageTitle from '../../components/PageTitle';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  if (props.keywords === undefined) {
    return null;
  }

  console.log(props.keywords);
  console.log(props.keyphrases);

  return (
    <div className="col-md-12 keyword-table">
      <div className="col-md-6">
        <ReactTable
          data={props.keywords}
          showPagination={false}
          columns={[
            {
              Header: 'Key Words',
              columns: [{
                id: 'keywords',
                accessor: data => {
                  let output = [];
                  _.map(data, keyword => {
                    output.push(keyword.split(' '));
                  });
                  return output;
                },
              }],
            }
          ]}
          defaultPageSize={5}
        />
      </div>
      <div className="col-md-6">
        <ReactTable
          data={props.keyphrases}
          defaultPageSize={5}
          showPagination={false}
          columns={[
            {
              Header: 'Key Phrases',
              columns: [{
                id: 'keyphrases',
                accessor: data2 => {
                  let output = [];
                  _.map(data2, keyphrase => {
                    output.push(keyphrase.split(''));
                  });
                  return output;
                },
              }],
            }
          ]}
        />
      </div>
      <div className="col-md-6">
        <ReactTable
          data={props.keymeaning}
          defaultPageSize={5}
          showPagination={false}
          columns={[
            {
              Header: 'Key Meaning',
              columns: [{
                id: 'keymeaning',
                accessor: data3 => {
                  let output = [];
                  _.map(data3, keymeaning => {
                    output.push(keymeaning.split(''));
                  });
                  return output;
                },
              }],
            }
          ]}
        />
      </div>
    </div>
  );
}

export default class KeywordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      keywords: [],
      keyphrases: [],
      pagedata: ""
    };

    this.state = {showWarning: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: true
    }));
  }

  handleGetKeyWords = (e) => {
    e.preventDefault();

    getKeyWord({
      value: this.state.value,
    }).then((res) => {
      if (res.data.status == 1) {
        this.setState({keywords: res.data.keywords, keyphrases: res.data.keyphrases, keymeaning: res.data.keymeaning});
      }
    }).catch((err) => {
      console.log(ereymeaningr);
    });
  };

  render() {
    return (
      <div>
        <PageTitle title={"Toeic Vocabulary"}/>

        <form onSubmit={this.handleGetKeyWords}>
          <div className="keyword-text-area">
            <div className="col-md-12">
              <label className="keyword-label">
                <div>Name:</div>
                <input className="keyword-input" type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
            </div>
          </div>
          <input onClick={this.handleToggleClick} type="submit" value="Submit"/>
        </form>
        <WarningBanner warn={this.state.showWarning} keywords={this.state.keywords} keyphrases={this.state.keyphrases}
                       keymeaning={this.state.keymeaning}/>
      </div>
    )
  }
}
