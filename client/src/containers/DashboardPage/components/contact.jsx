import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      totalFrequency: 0,
    };

  }

  handleChange = (e) => {

  };

  render() {
    let {wordsData = []} = this.props;
    console.log(wordsData);

    return (
      <div id="contact" className="no-padding">
          <div className="section-inner">

            <div className="spacer spacer-big"></div>

            <div className="wrapper">

              <div className="section-title">
                <h2>Liên hệ</h2>
                <div className="seperator size-small"><span></span></div>
                <h4 className="subtitle">Liên hệ với chúng tôiChúng tôi rất mong nhận được sự phản hồi của bạn
                </h4>
              </div>

              <div className="column-section clearfix">
                <div className="column one-half">
                  <form id="contact-form" className="checkform" action="#" target="contact-send.php" method="post">

                    <div className="form-row clearfix">
                      <label value="name" className="req" onChange={this.handleChange}>Tên *</label>
                      <div className="form-value"><input type="text" name="name" className="name" id="name"
                                                         value=""/></div>
                    </div>

                    <div className="form-row clearfix">
                      <label onChange={this.handleChange} value="email" className="req">Email *</label>
                      <div className="form-value"><input type="text" name="email" className="email" id="email"
                                                         value=""/></div>
                    </div>

                    <div className="form-row clearfix textbox">
                      <label value="message" className="req" onChange={this.handleChange}>Tin nhắn *</label>
                      <div className="form-value"><textarea name="message" className="message" id="message"
                                                            rows="15" cols="50"></textarea></div>
                    </div>

                    <div id="form-note">
                      <div className="alert alert-error">
                        <h6><strong>Error</strong>: Please check your entries!</h6>
                      </div>
                    </div>

                    <div className="form-row form-submit">
                      <input type="submit" name="submit_form" className="submit" value="Send"/>
                    </div>

                    <input type="hidden" name="subject" value="Contact Subject Xone html"/>
                    <input type="hidden" name="fields" value="name,email,message,"/>
                    <input type="hidden" name="sendto" value="spabrice@gmail.com"/>

                  </form>

                </div>

                <div className="column one-half last-col">
                  <h5>Drop in for a second</h5>
                  <p>
                    At vero eos et accusamus et iusto odios un dignissimos ducimus qui blan ditiis prasixer esentium
                    voluptatum un deleniti atqueste sites excep turiitate non providentsimils.
                  </p>
                  <div className="spacer spacer-small"></div>
                  <h5><strong>Xone Office</strong></h5>
                  <p>
                    133 Elizabethstreet Sydney 4000 Australia
                  </p>
                  <p>
                    0185 26 37 48 59
                    <a href="mailto:#">hello@xone-agency.com </a>
                  </p>
                </div>
              </div>

            </div>

            <div className="spacer spacer-big"></div>

          </div>
     </div>
    )
  }
}