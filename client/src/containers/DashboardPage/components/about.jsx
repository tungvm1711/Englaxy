import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";

export default class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <section id="about">
        <div className="section-inner">

          <div className="wrapper">

            <div className="section-title">
              <h2>Chúng tôi là Xenglaxy</h2>
              <div className="seperator size-small"><span></span></div>
              <h4 className="subtitle">Một website nhỏ giúp việc học tiếng Anh của bạn dễ dàng hơn</h4>
            </div>

            <div className="column-section clearfix intro-box">
              <div className="column one-half">
                <img className="intro-img" src={require('../../../files/uploads/astronaut.png')} alt="Logo"/>

              </div>
              <div className="column one-half last-col intro-description">
                <div className="column one-half last-col">
                  <h4>Cách tốt nhất để học một ngôn ngữ</h4>

                  <p>Học cùng Xenglaxy, bạn sẽ thấy rất vui và cuốn hút. Dành nhiều điểm từ các câu trả lời đúng, trả lời nhanh trước khi hết thời gian hay lên cấp. Những bài học nhỏ-gọn của chúng tôi rất hiệu quả, và đã có một nghiên cứu chứng minh điều này.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="spacer spacer-big"></div>

          <div id="quote" className="horizontalsection text-light parallax-section">
            <div className="horizontalinner wrapper">
              <div className="testimonial-item">
                <h3 className="testimonial-quote">It’s through mistakes that you actually can grow. You have to get bad in order to get good.</h3>
                <h6 className="testimonial-name">- <strong>Paula Scher</strong> -</h6>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}