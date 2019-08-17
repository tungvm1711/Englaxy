import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";

export default class VocabTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      totalFrequency: 0,
    };

  }

  handleSubmit = (e) => {
    console.log(this.state.selected);
    let totalFrequency = 0;

    for (const key of Object.keys(this.state.selected)) {
      if (this.state.selected[key]) {
        totalFrequency += parseInt(key);
      }
    }
    this.props.getFrequency(parseInt(totalFrequency));
  };

  handleSelect = (e) => {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.checked;
    this.setState({selected});
    console.log(this.state.selected);
  };

  render() {
    let {wordsData = []} = this.props;
    console.log(wordsData);

    return (
      <div>
        <ReactTable
          data={wordsData}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  id: 'words',
                  accessor: data => {
                    let output = [];
                    _.map(data, word => {
                      output.push(word.split(' '));
                    });
                    return output;
                  },
                  Cell: row => (
                    <span>
                      <input
                        name={row.original.replace(/ .*/,'')}
                        type="checkbox"
                        checked={this.state.selected[row.original.replace(/ .*/,'')]}
                        onChange={this.handleSelect}
                        defaultValue = {row.original.replace(/ .*/,'')}
                      />
                      <label>{row.original.split(" ").splice(-1)}</label>
                    </span>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
        />
{/*
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
*/}
      </div>
    )
  }
}