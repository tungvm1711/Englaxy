import React from 'react';

import Main from './Main';
import ToeicVocabPage from './ToeicVocabPage';
import Footer from './Footer';
import Header from './Header';


export default class Layout extends React.Component {
  render(): React.Element<any> {
    return (
      <div id="page-content" className="fixed-header">
        <Header />
        <ToeicVocabPage />
        <Footer />
      </div>
    );
  }
}
