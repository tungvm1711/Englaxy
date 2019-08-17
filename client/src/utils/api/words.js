import axios from 'axios';
import host from '../config/hostApi';
const url = `${host}`;

exports.getAllWords = async function(data){
  try{
    let rs = await axios.get(`${url}/words`);
    return rs;
  }catch(e){
    throw e;
  }
};

exports.getKeyWord =  function(data){
  return axios.post(`${url}/words/keywords`, data);
};


