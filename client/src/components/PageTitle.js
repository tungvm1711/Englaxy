import React from 'react';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <div className="spacer spacer-big"></div>

        <div id="quote" className="horizontalsection text-light parallax-section">
          <div className="horizontalinner wrapper">
            <div className="testimonial-item">
              <h3 className="testimonial-quote">{this.props.title}</h3>
              <h6 className="testimonial-name">- <strong>Paula Scher</strong> -</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}