import React from 'react';

export default class Footer extends React.Component {
  render(): React.Element<any> {
    const {i18n} = this.props;
    return (
      <footer>
        <div className="footerinner wrapper align-center text-light">
          <a id="backtotop" href="#" className="sr-button sr-buttonicon small-iconbutton"><i className="fa fa-angle-up"></i></a>
          <p className="footer-logo"><img src={require('../../src/files/uploads/xone-logo-footer.png')} alt="Footer Logo"/></p>
          <ul className="socialmedia-widget social-share">
            <li className="facebook"><a href="#">Facebook</a></li>
            <li className="twitter"><a href="#">Tweet</a></li>
            <li className="linkedin"><a href="#">Google Plus</a></li>
            <li className="dribbble"><a href="#">Dribble</a></li>
            <li className="behance"><a href="#">Behance</a></li>
            <li className="instagram"><a href="#">Instagram</a></li>
          </ul>
          <p className="copyright">Copyright &copy; 2014 - Xone - Created by SpabRice</p>
        </div>
      </footer>
    );
  }
}