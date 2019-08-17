import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:8000/api/";
let host = "http://localhost:8000/api/users/";
let hostarticle = "http://localhost:8000/api/articles/";
import { push } from 'react-router-redux';
import { getAllVocabularies, saveVocabulary, removeVocabulary } from '../../utils/API';
import * as types from '../reducers/actionTypes';

export function loadArticles() {
  return (dispatch) => {
    axios.get(`${hostarticle}articles`)
      .then((res) => {
        let articles = res.data;
        dispatch({type: 'LOAD_ARTICLES', articles})
      }).catch((err) => {
      console.log(err)
    })
  }
}

export function getUser(_id) {
  return axios.get(`${host}${_id}`).then((res) => {
    return res.data
  }).catch(err => console.log(err))
}

export function getUserProfile(_id) {
  return (dispatch) => {
    axios.get(`${host}profile/${_id}`).then((res) => {
      let profile = res.data;
      console.log(res.data);
      dispatch({type: 'SET_PROFILE', profile})
    }).catch(err => console.log(err))
  }
}

export function getArticle(article_id) {
  return (dispatch) => {
    axios.get(`${hostarticle}article/${article_id}`)
      .then((res) => {
        let article = res.data
        dispatch({type: 'VIEW_ARTICLE', article})
      }).catch((err) => console.log(err))
  }
}

// article_id, author_id, comment
export function comment() {
  return (dispatch) => {

  }
}

//req.body.article_id
export function clap(article_id) {
  return (dispatch) => {
    console.log('clapping...');
    axios.post(`${hostarticle}article/clap`, {article_id}).then((res) => {
      dispatch({type: 'CLAP_ARTICLE'})
    }).catch((err) => console.log(err))
  }
}

//id, user_id
export function follow(id, user_id) {
  console.log(`${id} following ${user_id}`);
  return (dispatch) => {
    axios.post(`${host}follow`, {id, user_id}).then((res) => {
      dispatch({type: 'FOLLOW_USER', user_id})
    }).catch((err) => console.log(err))
  }
}

export function SignInUser(user_data) {
  return (dispatch) => {
    axios.post(`${host}registeruser`, user_data).then((res) => {
      let user = res.data;
      console.log(user);
      localStorage.setItem('Auth', JSON.stringify(user));
      dispatch({type: 'SET_USER', user})
    }).catch((err) => console.log(err))
  }
}
export function SignOutUser(user_data) {
  return (dispatch) => {
    axios.post(`${host}logout`, user_data).then((res) => {
      let user = res.data;
      localStorage.removeItem('Auth');
      dispatch({type: 'LOGOUT_USER', user})
    }).catch((err) => console.log(err))
  }
}

export function toggleClose() {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_MODAL', modalMode: false})
  }
}

export function toggleOpen() {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_MODAL', modalMode: true})
  }
}


export const wait = () => {
  return {
    type: types.WAIT_VOCABULARY_ACTION
  };
};

export const fetchSuccess = (vocabularies) => {
  return {
    type: types.FETCH_VOCABULARIES_SUCCESS,
    vocabularies
  };
};

export const saveSuccess = (vocabulary) => {
  return {
    type: types.SAVE_VOCABULARY_SUCCESS,
    vocabulary
  };
};

export const showMessage = (message) => {
  return {
    type: types.SHOW_VOCABULARY_MESSAGE,
    message
  };
};

export const removeSuccess = (_id) => {
  return {
    type: types.DELETE_VOCABULARY_SUCCESS,
    _id
  };
};

export const fetch = () => {
  return (dispatch) => {
    return getAllVocabularies()
      .then((response) => {
        dispatch(fetchSuccess(response));
      })
      .catch(() => {
        dispatch(push('/internal-server-error'));
      });
  };
};

export const save = (vocabulary) => {
  return (dispatch) => {
    dispatch(wait());

    return saveVocabulary(vocabulary)
      .then((response) => {
        dispatch(saveSuccess(response));
      })
      .catch((error) => {
        const {
          response: {
            data: {
              error: {
                errmsg
              } = {}
            } = {},
            message
          } = {}
        } = error;

        dispatch(showMessage(errmsg || message));
      });
  };
};

export const remove = (_id) => {
  return (dispatch) => {
    dispatch(wait());

    return removeVocabulary(_id)
      .then(() => {
        dispatch(removeSuccess(_id));
      })
      .catch(() => {
        dispatch(push('/internal-server-error'));
      });
  };
};
