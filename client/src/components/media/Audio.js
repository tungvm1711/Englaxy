import React, { Component, PropTypes } from 'react';

export default class Audio extends Component {

  static defaultProps = {
    type: 'audio/mpeg',
    autoPlay: false
  }

  componentDidMount() {
    if (this.props.autoPlay) {
      this._play();
    }
  }

  _play() {
    this.audio.play();
  }

  render() {
    const { src, type } = this.props;

    return (
      <div className="Audio">
        <i className="fa fa-volume-up" onClick={() => this._play()} />
        <audio ref={(audio) => { this.audio = audio; }}>
          <source src={src} type={type} />
        </audio>
      </div>
    );
  }
}
