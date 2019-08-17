import axios from 'axios';
import host from './../config/hostApi';
const url = `${host}/auth`;

exports.login =  function(data){
  console.log(data);
  return axios.post(`${url}/login`, data);
};
