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
      <section id="blog">
        <div className="section-inner wrapper">

          <div className="section-title">
            <h2>Ngữ Pháp</h2>
            <div className="seperator size-small"><span></span></div>
            <h4 className="subtitle">Các bài giảng mới nhất</h4>
          </div>

{/*          <div id="blog-grid" className="masonry blog-entries clearfix">

            <div className="blog-masonry-entry masonry-item">
              <div className="entry-media blog-media">
                <iframe
                  src="http://player.vimeo.com/video/62044211?title=0&amp;byline=0&amp;portrait=0&amp;color=c2c2c2"
                  width="500" height="281" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true"
                  allowfullscreen></iframe>
              </div>

              <div className="blog-headline">
                <h4 className="post-name"><a href="blog-single.html"><strong>Giza Lagarce</strong></a></h4>
                <h6 className="post-meta">26 Jan, 2014</h6>
              </div>

              <p className="blog-intro">Praesent augue arcu, ornare ut tincidunt eu, mattis a libero. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elit purus, ...
              </p>

              <p>
                <a href="blog-single.html" className="readmore-button">Read More</a>
              </p>
            </div>

            <div className="blog-masonry-entry masonry-item">
              <div className="entry-media blog-media">
                <div className="flexslider blog-slider">
                  <ul className="slides">
                    <li><img src="files/uploads/1100x500.jpg" alt="SEO IMAGE NAME"/></li>
                    <li><img src="files/uploads/1100x500.jpg" alt="SEO IMAGE NAME"/></li>
                  </ul>
                </div>
              </div>

              <div className="blog-headline">
                <h4 className="post-name"><a href="blog-single.html"><strong>Day of Photography</strong></a></h4>
                <h6 className="post-meta">14 Jan, 2014</h6>
              </div>

              <p className="blog-intro">Praesent augue arcu, ornare ut tincidunt eu, mattis a libero. Pellentesque habitant
                ...
              </p>

              <p>
                <a href="blog-single.html" className="readmore-button">Read More</a>
              </p>
            </div>

            <div className="blog-masonry-entry masonry-item">
              <div className="entry-media blog-media">
                <img src="files/uploads/1100x500.jpg" alt="SEO IMAGE NAME"/>
              </div>

              <div className="blog-headline">
                <h4 className="post-name"><a href="blog-single.html"><strong>Interview with Jhon Doe</strong></a></h4>
                <h6 className="post-meta">07 Dec, 2013</h6>
              </div>

              <p className="blog-intro">Praesent augue arcu, ornare ut tincidunt eu, mattis a libero. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elit purus, ullamcorper vel
                luctus vitae, ...
              </p>

              <p>
                <a href="blog-single.html" className="readmore-button">Read More</a>
              </p>
            </div>
          </div>*/}

          <p className="align-center">
            <a href="blog.html" className="sr-button sr-button2 small-button">Xem thêm</a>
          </p>

        </div>
      </section>
    )
  }
}