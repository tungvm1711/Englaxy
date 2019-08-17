import React from 'react';
import {connect} from 'react-redux'
import {GoogleLogout} from 'react-google-login';

const logout = () => {
  console.log('logout') // eslint-disable-line
}

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="">
        <div className="header-inner wrapper clearfix">
          <div id="logo" className="left-float">
            <a id="defaut-logo" className="logotype" href="#"><img
              src={require("../../src/files/uploads/englaxy-logo.png")} alt="Logo"/></a>
          </div>
          <div data-behavior="progress-bar" className="progress-bar"></div>
          <div className="menu right-float clearfix">
            <nav id="main-nav">
              <ul>
                <li className="current-menu-item"><a href="#" className="scroll-to">Kiểm tra từ vựng</a></li>
                <li><a href="/article">Ngữ pháp</a></li>
                <li><a href="/vocabulary">Từ vựng</a>
                  <ul className="sub-menu">
                    <li><a href="/vocabdaily">Từ vựng hôm nay</a></li>
                    <li><a href="/vocab">Từ vựng TOEIC</a></li>
                  </ul>
                </li>
                <li><a href="/keywords">Tìm keywords</a></li>
                <li><a href="/numberquiz">Quiz</a></li>
                {this.props.isAdmin ?
                  <li><a href="/vocabulary">Quản lý</a>
                    <ul className="sub-menu">
                      <li><a href="/vocabmanage">Quản lý từ vựng</a></li>
                      <li><a href="/usermanage">Quản lý người dùng</a></li>
                    </ul>
                  </li> : ''}
                {this.props.isAuth ?
                  <li><a className="sign-up-btn sr-button sr-button2 medium-button"
                         data-behavior="trigger-overlay"
                         href="/editor">
                    Write a story
                  </a></li> : ''}
                {this.props.isAuth ? '' :
                  <li onClick={this.props.openSignInWith}
                      className="sign-in-button"><a
                      className="button green-border-button"
                      data-behavior="trigger-overlay" href="#">Đăng nhập</a>
                </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser.user,
    isAuth: state.authUser.isAuth,
    isAdmin: state.authUser.isAdmin
  }
};
const mapDispatchToProps = dispatch => {
  return {
    openSignInWith: () => {
      dispatch({type: 'TOGGLE_MODAL', modalMode: true})
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);