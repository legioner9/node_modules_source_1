'use strict';

const cheerio = require('cheerio');
const getHTML = require('./libs/getHTML');
const writeCSV = require('./libs/writeCSV');

const startUrl = 'https://hidemy.name/ru/proxy-list/?type=h#list';
const baseUrl = 'https://hidemy.name';
const tableRowSelector = '.inner .table_block tr';
const nextPageLinkSelector = '.pagination .next_array a';
const addrColIndex = 0;
const portColIndex = 1;
const proxyType = 'http';
const dstFile = './result.csv';
const headers = {
  'Cookie': '__cfduid=df0f27963f74bedac8295bbbf4bf616cd1578833620; t=152631734; jv_visits_count_PeHzjrJoSL=3; cf_clearance=6be6588940ec85d25a629574413d8d1d798c5f42-1579771170-0-150; jv_enter_ts_PeHzjrJoSL=1579771172995; jv_pages_count_PeHzjrJoSL=6'
};

async function main() {
  let result = [];
  let eof = false;
  let raund = 0;
  let url = startUrl;
  
  while ( !eof ) {
    console.log('Raund:', raund, 'url:', url);
    
    let webResponse = await getHTML(url, headers);
    let webData = webResponse.data;
    let $ = cheerio.load(webData);
    let targetTable = $(tableRowSelector);
    
    for (let i=1; i<targetTable.length; i++) {
      let tdList = cheerio('td', targetTable[ i ]);
      let addr = cheerio(tdList[ addrColIndex ]).html();
      let port = cheerio(tdList[ portColIndex ]).html();
      result.push({ addr: addr, port: port, type: proxyType });
    }
    
    let nextPageUrl = $(nextPageLinkSelector);
    if ( nextPageUrl.length ==0 ) {
      eof = true;
    } else {
      raund++;
      url = baseUrl + nextPageUrl[ 0 ].attribs.href;
    }
  }
    
  writeCSV(dstFile, result);
}

main();
