import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <section id="home" className="no-padding">
        <div className="section-inner">

          <div className="home-slider-container">
            <div className="home-slider">
              <ul>

                <li data-transition="fade" data-slotamount="5" data-masterspeed="800">
                  <img src={require('../../../files/uploads/mars.jpg')} alt="slidebg1" data-bgfit="cover"
                       data-bgposition="center center" data-bgrepeat="no-repeat"/>

                  <div className="tp-caption srcaption-bigwhite lfl ltr" data-x="center" data-hoffset="0"
                       data-y="center" data-voffset="0" data-speed="1000" data-start="100"
                       data-easing="easeInOutQuad" data-endspeed="1000" data-endeasing="easeInOutQuad"
                       style={{zIndex: 2}}>CHÚNG TÔI LÀ<strong>XENGLAXY</strong>
                  </div>

                  <div className="tp-caption srcaption-miniwhite sfb" data-x="center" data-hoffset="0"
                       data-y="bottom" data-voffset="-45" data-speed="500" data-start="1200"
                       data-easing="easeInOutQuad" data-endspeed="1000" data-endeasing="easeInOutQuad"
                       style={{zIndex: 3}}>Tìm hiểu về Xenglaxy
                  </div>

                  <div className="tp-caption srcaption-miniwhite sfb text-light" data-x="center" data-hoffset="0"
                       data-y="bottom" data-voffset="15" data-speed="500" data-start="1300"
                       data-easing="easeInOutQuad" data-endspeed="1000" data-endeasing="easeInOutQuad"
                       style={{zIndex: 3}}><a href="#"
                                              className="sr-button sr-buttonicon small-iconbutton scroll-to"><i
                    className="fa fa-angle-down"></i></a>
                  </div>

                </li>

              </ul>

            </div>
          </div>
          <div className="spacer spacer-big"></div>

          <div id="quote" className="horizontalsection text-light parallax-section">
            <div className="horizontalinner wrapper">
              <div className="testimonial-item">
                <h3 className="testimonial-quote">It’s through mistakes that you actually can grow. You have to get bad in
                  order to get good.</h3>
                <h6 className="testimonial-name">- <strong>Paula Scher</strong> -</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}