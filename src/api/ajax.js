import axios from 'axios';

export default function ajax(url, data, type='GET') {
  if(type==='GET'){
    let queryStr = '';
    Object.keys(data).forEach(key => {
      const value = data[key];
      queryStr += key + "=" + value + '&'
    });
    return axios.get(url)
  }else{
    return axios.post(url,data)
  }

}