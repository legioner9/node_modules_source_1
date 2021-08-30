
const axios = require('axios');

const defaultHeaders = {
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
  'Referer': 'https://www.google.com/',
  'DNT': '1',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Pragma': 'no-cache',
  'Cache-Control': 'no-cache',
  'TE': 'Trailers'
};

function getHTML(url, headers={}) {
  let _headers = Object.assign({}, defaultHeaders);
  for (let hName in headers) {
    _headers[ hName ] = headers[ hName ];
  }
  
  return axios({
    method: 'get',
    url: url,
    timeout: 15000,
    headers: _headers
  });
}

module.exports =  getHTML;
