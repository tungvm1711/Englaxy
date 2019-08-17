import React from 'react';
import axios from 'axios';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { name, password } = this.state;

    return axios.post('http://localhost:8000/api/auth/register', {
      name,
      password,
    });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { name, password } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('name', ev)}
          value={name}
          className="form-control my-3"
          placeholder="Name"
        />
        <input
          onChange={(ev) => this.handleChangeField('password', ev)}
          value={password}
          className="form-control my-3"
          placeholder="Password"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
      </div>
    )
  }
}
