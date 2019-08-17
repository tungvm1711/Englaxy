import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import Form  from '../../components/UserForm/UserForm.jsx';

class UserManagePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { onLoad } = this.props;

    axios('http://localhost:8000/api/users/manageuser/getalluser')
      .then((res) => onLoad(res.data));
  }

  handleDelete(id) {
    const { onDelete } = this.props;

    return axios.delete(`http://localhost:8000/api/users/manageuser/${id}`)
      .then(() => onDelete(id));
  }

  handleEdit(user) {
    const { setEdit } = this.props;

    setEdit(user);
  }

  render() {
    const { users } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">LightBlog</h1>
          </div>
{/*
          <Form />
*/}
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <ReactTable
              data={users}
              columns={[
                {
                  Header: "Name",
                  columns: [
                    {
                      Header: "User Name",
                      id: "userName",
                      accessor: d => d.name
                    }
                  ]
                },
                {
                  Header: "Info",
                  columns: [
                    {
                      Header: "Email",
                      id: "email",
                      accessor: d => d.email
                    },
                  ]
                },
                {
                  Header: 'Roles',
                  columns: [
                    {
                      Header: "User Roles",
                      id: "roles",
                      accessor: d => d.roles
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
            {/*{users.map((user) => {
              return (
                <div className="card my-3">
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        Header: "Name",
                        columns: [
                          {
                            Header: "First Name",
                            accessor: "firstName"
                          },
                          {
                            Header: "Last Name",
                            id: "lastName",
                            accessor: d => d.lastName
                          }
                        ]
                      },
                      {
                        Header: "Info",
                        columns: [
                          {
                            Header: "Age",
                            accessor: "age"
                          },
                          {
                            Header: "Status",
                            accessor: "status"
                          }
                        ]
                      },
                      {
                        Header: 'Stats',
                        columns: [
                          {
                            Header: "Visits",
                            accessor: "visits"
                          }
                        ]
                      }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                  <div className="card-header">
                    {user.id}
                  </div>
                  <div className="card-body">
                    {user.name}
                  </div>
                  <div className="card-body">
                    {user.email}
                  </div>
                  <div className="card-body">
                    {user.roles}
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <button onClick={() => this.handleEdit(user)} className="btn btn-primary mx-3">
                        Sửa User
                      </button>
                      <button onClick={() => this.handleDelete(user._id)} className="btn btn-danger">
                        Xóa User
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
  onDelete: id => dispatch({ type: 'DELETE_USER', id }),
  setEdit: user => dispatch({ type: 'SET_EDIT', user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagePage);