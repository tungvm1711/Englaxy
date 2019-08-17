import _ from 'lodash';
import axios from 'axios';

const getConfig = (config = {}) => {
  config.url = ('http://localhost:8000/api' || '/api') + (config.url || '');
  return config;
};

const request = async (config = {}) => {
  try {
    const { data } = await axios(getConfig(config));

    return data;
  } catch (error) {
    throw error;
  }
};

export default  request;
