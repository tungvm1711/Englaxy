import  request  from './request';

const buildParamsString = (params) => {
  let paramString = '';

  Object.keys(params).forEach((key) => {
    if (paramString.length) {
      paramString += '&';
    }

    paramString += `${key}=${params[key]}`;
  });

  return paramString;
};

export const getAllVocabularies = () => {
  return request({ url: '/vocabularies/' });
};

export const getDailyVocabularies = () => {
  return request({ url: '/vocabularies/daily' });
};

export const getRandomVocabularies = (params = {}) => {
/*
  return request({ url: `/vocabularies/random?${buildParamsString(params)}` });
*/
  return request({ url: `/vocabularies/random` });

};

export const findVocabulary = (_id) => {
  return request({ url: `/vocabularies/${_id}` });
};

export const searchVocabularies = (params = {}) => {
  return request({ url: `/vocabularies/search?${buildParamsString(params)}` });
};

export const searchAutocompleteVocabularies = (params = {}) => {
  return request({ url: `/vocabularies/search/autocomplete?${buildParamsString(params)}` });
};

export const getPOS = () => {
  return request({ url: '/vocabularies/pos' });
};

export const createVocabulary = (vocabulary) => {
  return request({ method: 'post', url: '/vocabularies/', data: { vocabulary } });
};

export const updateVocabulary = (vocabulary) => {
  return request({ method: 'put', url: `/vocabularies/${vocabulary._id}`, data: { vocabulary } });
};

export const saveVocabulary = (vocabulary) => {
  if (vocabulary._id) {
    return updateVocabulary(vocabulary);
  }

  return createVocabulary(vocabulary);
};

export const removeVocabulary = (_id) => {
  return request({ method: 'delete', url: `/vocabularies/${_id}` });
};

export const markVocabulary = (_id) => {
  return request({ url: `/vocabularies/${_id}/mark` });
};

export const getMarkedVocabularies = () => {
  return request({ url: '/vocabularies/marked' });
};