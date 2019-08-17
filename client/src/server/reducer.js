import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import toeicvocab from './reducers/toeicvocab';
import lessonlist from './reducers/lessonlist';
import vocabulary from './reducers/vocabulary';
import user from './reducers/user';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  authUser,
  vocabulary,
  user,
  common,
  appInfo: toeicvocab,
  lessonListInfo: lessonlist,
  router: routerReducer
});

