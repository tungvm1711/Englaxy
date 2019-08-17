import React, { PureComponent } from 'react';
import {Link, withRouter} from 'react-router-dom';
class TopMenu extends React.Component{
  handleLogout = () => {
    const {history} = this.props;
    localStorage.removeItem('user');
    history.push('/login');
  };

  handleMoveToLogin = () => {
    this.setState({redirect: true});
  };

  render(){
    return (
      <ul className="nav navbar-top-links navbar-right">
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <i className="fa fa-user fa-fw"></i>
            <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu dropdown-user">
            <li>
              <a onClick={this.handleLogout}>
                <i className="fa fa-sign-out fa-fw"></i>
                Đăng xuất</a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}
export default withRouter(TopMenu);