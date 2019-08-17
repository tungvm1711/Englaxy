import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store, history} from './server/store';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import '../resources/scss/style.scss';
import '../resources/scss/medium.css';
import '../resources/scss/dark.css';
import '../resources/scss/htmlstyle.css';
import '../resources/scss/vocabulary.css';
import '../resources/scss/mqueries.css';
import '../resources/scss/font-awesome.min.css';
import '../resources/rs-plugin/css/settings.css';
import '../resources/js/jquery-1.9.1.min';
import '../resources/js/modernizr';
import '../resources/js/jquery.parallax.min';
import '../resources/js/jquery.visible.min';
import '../resources/js/script';
import '../resources/js/xone-form';
import '../resources/js/xone-header';
import '../node_modules/react-table/react-table.css';
import '../resources/js/xone-loader';
import '../resources/rs-plugin/js/jquery.themepunch.plugins.min';
import '../resources/rs-plugin/js/jquery.themepunch.revolution';
import registerServiceWorker from '../registerServiceWorker';
import {getUser} from './server/actions/actions';

if (localStorage.Auth) {
  console.log('first dispatch');
  store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)})

  var _id = JSON.parse(localStorage.Auth)._id;
  getUser(_id).then((res) => {
    store.dispatch({type: 'SET_USER', user: res})
  })
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={Layout}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();