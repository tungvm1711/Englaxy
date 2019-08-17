import React from 'react';
import axios from 'axios';
import Contact from './components/contact.jsx';
import Service from './components/service.jsx';
import Intro from './components/intro.jsx';
import Blog from './components/blog.jsx';
import About from './components/about.jsx';

export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words,
      shouldBeRender: false,
      loading: false
    };
  }

  componentWillMount() {
    const {onLoad} = this.props;

  }

  render() {

    return (


      <div className="page-body">
        <Intro/>
        <About/>
        <div className="spacer spacer-big"></div>
        <Blog/>
      </div>
    )
  }
}