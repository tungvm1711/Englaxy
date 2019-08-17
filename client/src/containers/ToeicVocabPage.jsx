import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import LessonList from './ToeicVocabPage/LessonList/index';
import LessonDetails from './ToeicVocabPage/LessonDetails/index';
import DashboardPage from './DashboardPage/DashboardPage.jsx';
import NumberQuizPage from './NumberQuizPage/NumberQuizPage.jsx';
import VocabQuizPage from './VocabQuizPage/VocabQuizPage.jsx';
import VocabularyPage from './VocabularyPage/VocabularyPage.jsx';
import VocabDailyPage from './VocabularyPage/VocabDaily/VocabDaily';
import KeywordPage from './KeywordPage/KeywordPage.jsx';
import ArticlePage from './ArticlePage/ArticlePage.js';
import Profile from './UserPage/Profile.js';
import ArticleView from './ArticlePage/components/ArticleView.js';
import Editor from './ArticlePage/components/Editor.js';
import requireAuthentication from '../utils/requireAuth.js';
import requireAuthAdmin from '../utils/requireAuthAdmin.js';
import SignInWith from '../components/SignInWith.js';
import UserManagePage from '../containers/UserManagePage/UserManagePage.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {main: deepPurple[700]},
    secondary: {
      main: '#ff5722',
      light: '#ff6333',
      dark: '#ff3d00',
    }
  },
});

const requireAdminAuth = (authenticated, isAdmin) => {
  return (nextState, replace, callback) => {
    if (!authenticated) {
      replace({
        pathname: '/login',
        query: { redirect: encodeURIComponent(nextState.location.pathname) },
        state: { nextPathname: nextState.location.pathname }
      });
    } else if (!isAdmin) {
      replace({
        pathname: '/access-denied',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };
};

class ToeicVocabPage extends PureComponent {
  render() {
    const {appInfo} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <SignInWith />
        <Switch>
          <Route exact path="/" component={DashboardPage}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="/articleview/:id" component={ArticleView}/>
          <Route path="/editor" component={requireAuthentication(Editor)}/>
          <Route path="/article" component={ArticlePage}/>
          <Route path="/keywords" component={requireAuthAdmin(KeywordPage)}/>
          <Route path="/numberquiz" component={VocabQuizPage}/>
          <Route path="/vocabdaily" component={VocabDailyPage}/>
          <Route path="/vocabmanage" component={VocabularyPage}/>
          <Route path="/usermanage" component={UserManagePage}/>
          <div className="block-body-content">
            <Route path="/vocab" component={() => <LessonList lessons={appInfo.lessons ? appInfo.lessons : []}/>}/>
            {
              appInfo.lessons.map((lesson) => (
                <Route key={lesson.id} path={lesson.routerURL}
                       component={() => <LessonDetails key={lesson.id} lesson={lesson}/>}/>
              ))
            }
          </div>
        </Switch>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  appInfo: state.appInfo,
});


export default withRouter(connect(mapStateToProps, null)(ToeicVocabPage));
