import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userToEdit) {
      this.setState({
        roles: nextProps.userToEdit.roles,
      });
    }
  }

  handleSubmit(){
    const { onSubmit, userToEdit, onEdit } = this.props;
    const { roles} = this.state;

    if(!userToEdit) {
      return axios.post('http://localhost:8000/api/users/manageuser/', {
        roles,
      })
        .then((res) => onSubmit(res.data))
        .then(() => this.setState({ roles: ''}));
    } else {
      return axios.patch(`http://localhost:8000/api/users//manageuser/${userToEdit._id}`, {
        roles,
      })
        .then((res) => onEdit(res.data))
        .then(() => this.setState({ roles: ''}));
    }
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { userToEdit } = this.props;
    const { title, body, author } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={roles}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">{userToEdit ? 'Update' : 'Submit'}</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({ type: 'SUBMIT_USER', data }),
  onEdit: data => dispatch({ type: 'EDIT_USER', data }),
});

const mapStateToProps = state => ({
  userToEdit: state.home.userToEdit,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);