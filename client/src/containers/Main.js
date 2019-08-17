import { withRouter, Switch, Route } from 'react-router-dom';
import DashboardPage from './DashboardPage/DashboardPage.jsx';
import RegisterPage from './RegisterPage/RegisterPage.jsx';
import KeywordPage from'./KeywordPage/KeywordPage.jsx';
import TestingVocabPage from './TestingVocabPage/TestingVocabPage.jsx';
import ToeicVocabPage from './ToeicVocabPage.jsx';
import React, { Component } from 'react';
import Feed from './ArticlePage/ArticlePage.js';
import Profile from './UserPage/Profile.js';
import ArticleView from './ArticlePage/components/ArticleView.js';
import Editor from './ArticlePage/components/Editor.js';
import requireAuthentication from '../utils/requireAuth.js';
import SignInWith from '../components/SignInWith.js';

export default class Main extends React.Component {
  render(): React.Element<any> {
    const {...rest} = this.props;
    const pathname = window.location.pathname;
    console.log("hihi main");

    console.log(this.props);

    return (
      <div>
{/*
        { !pathname.includes('editor') ? <Header /> : '' }
*/}
        <SignInWith />
        <Switch>

          <Route exact path="/" component={ToeicVocabPage} />

          <Route path="/profile/:id" component={Profile} />
          <Route path="/articleview/:id" component={ArticleView} />
          <Route path="/editor/23" component={requireAuthentication(Editor)} />
{/*
          <Route path="**" component={Feed} />
*/}
        </Switch>
      </div>
    );
  }
}
