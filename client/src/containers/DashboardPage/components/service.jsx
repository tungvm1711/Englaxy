import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";

export default class Service extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <section id="service">
        <div className="section-inner">
          <div className="wrapper">

            <div className="section-title">
              <h2>Học Mọi Lúc Mọi Nơi</h2>
              <div className="seperator size-small"><span></span></div>
              <h4 className="subtitle">Xenglaxy có tất cả mọi thứ bạn cần để học tiếng Anh một cách hiệu quả</h4>
            </div>

            <div className="column-section clearfix">
              <div className="column one-third align-center sr-animation sr-animation-zoomin" data-delay="200">
                <i className="fa fa-cogs fa-4x xone"></i>
                <h4><strong>Kiểm Tra Khả Năng Từ Vựng</strong></h4>
                <p>
                  Kiểm tra khả năng từ vựng của bạn ở mức nào trong thang điểm của chúng tôi
                </p>
              </div>
              <div className="column one-third align-center sr-animation sr-animation-zoomin" data-delay="400">
                <i className="fa fa-eye fa-4x xone"></i>
                <h4><strong>Tìm Keyword</strong></h4>
                <p>
                  Tìm keyword trong một đoạn văn
                </p>
              </div>
              <div className="column one-third last-col align-center sr-animation sr-animation-zoomin" data-delay="600">
                <i className="fa fa-rocket fa-4x xone"></i>
                <h4><strong>Từ Vựng</strong></h4>
                <p>
                  Học từ vựng mới theo từng chủ đề
                </p>
              </div>
            </div>

          </div>

          <div>
            <div className="">
              <div id="quote" className="horizontalsection text-light parallax-section">
                <div className="horizontalinner wrapper">
                  <div className="testimonial-item">
                    <h3 className="testimonial-quote">It’s through mistakes that you actually can grow. You have to get
                      bad in order to get good.</h3>
                    <h6 className="testimonial-name">- <strong>Paula Scher</strong> -</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}