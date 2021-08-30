#!/bin/node

'use strict';

const fs = require('fs');
const colors = require('colors');
const request = require('request');

const requestTimeout = 2500; // This is whole request timeout
const requestOptions = {
  url: '',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.5',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'DNT': '1',
    'Origin': '',
    'Pragma': 'no-cache',
    'Referer': ''
  },
  followRedirect: false,
  maxRedirects: 0,
  timeout: 1000, // This is socket timeout 
  // This timeout sets the amount of time to wait *between* bytes sent
  // from the server once connected.
  proxy: ``
};
const outHeaders = [ 'addr', 'port', 'type', 'result', 'time', 'login', 'password' ];
const logins = fs.readFileSync('./login_dict.txt', { encoding: 'utf8' }).split('\n');
const passwords = fs.readFileSync('./passw_dict.txt', { encoding: 'utf8' }).split('\n');

function parseCsv(srcString) {
  let result = [];
  let headers = [];
  let lines = srcString.split('\n');
  
  for (let name of lines[ 0 ].split(',')) {
    headers.push(name.trim());
  }
  
  for (let lineIndex=1; lineIndex<lines.length; lineIndex++) {
    let cols = lines[ lineIndex ].split(',');
    let resLine = {};
    
    for (let colIndex = 0; colIndex<headers.length; colIndex++) {
      if ( cols[ colIndex ] ) {
        resLine[ headers[ colIndex ] ] = cols[ colIndex ].trim();
      }
    }
    
    result.push(resLine);
  }

  return result;
}

function TRequest(options, timeout) {
  return new Promise( function(resolve, reject) {
    let thisRequest = request(options, function(error, response) {
      if ( error ) {
        return reject(error);
      }
      return resolve(response);
    });
    
    setTimeout(function() {
      thisRequest.abort();
      return reject(new Error('HTTP request timed out: REQUESTTIMEOUT'));
    }, timeout);
  });  
}

async function check(proxy, testWebsite, bruteForce) {  
  let options = Object.assign({}, requestOptions);
  
  if ( proxy.login && proxy.pass ) {
    options.proxy = `${proxy.type.toLowerCase()}://${proxy.login}:${proxy.pass}@${proxy.addr}:${proxy.port}`;
  } else {
    options.proxy = `${proxy.type.toLowerCase()}://${proxy.addr}:${proxy.port}`;
  }
  
  options.url = testWebsite;
  options.headers.Origin = testWebsite;
  
  let scanStart = new Date();
  let testStart = new Date();
  
  try {
    await TRequest(options, requestTimeout);
    let testTime = new Date() - testStart;
    console.log(colors.green(`${options.proxy} - Result: OK time: ${testTime}`));
    return {
      type: proxy.type,
      addr: proxy.addr,
      port: proxy.port,
      result: 'OK',
      time: testTime,
      login: '',
      password: ''
    };
  } catch (err) {
    // Else, try to authorize with login/password
    if ( bruteForce === 'yes' ) {
      for (let login of logins) {
        for (let pass of passwords) {
          testStart = new Date();
          options.proxy = `${proxy.type.toLowerCase()}://${login}:${pass}@${proxy.addr}:${proxy.port}`;
          try {
            await TRequest(options, requestTimeout);
            let testTime = new Date() - testStart;
            console.log(colors.green(`${options.proxy} - Result: OK time: ${testTime}`));
            return {
              type: proxy.type,
              addr: proxy.addr,
              port: proxy.port,
              result: 'OK',
              time: testTime,
              login: login,
              password: pass
            };
          } catch {
          // DO nothing
          }
        }
      }
    }
  }
  
  let scanTime = new Date() - scanStart;
  console.log(colors.red(`${proxy.type}://${proxy.addr}:${proxy.port} - Result: ERROR time: ${scanTime}`));
  
  return {
    type: proxy.type,
    addr: proxy.addr,
    port: proxy.port,
    result: 'ERROR',
    time: scanTime,
    login: '',
    password: ''
  };
}

async function main() {  
  if ( process.argv.length < 5 ) {
    console.log('Not enough arguments, usage:');
    console.log('node checker.js input_file.csv output_file.csv http://test_website pseudo_threads_count brute_force_pass');
    process.exit(1);
  }
  
  const srcFile = process.argv[ 2 ];
  const dstFile = process.argv[ 3 ];
  const testWebsite = process.argv[ 4 ];
  let pseudoThreads =  parseInt(process.argv[ 5 ]);
  let bruteForce = process.argv[ 6 ]; // yes|no
  
  process.on('uncaughtException', function() {
    // Do nothing
    // see issue: https://github.com/request/tunnel-agent/issues/43
  });
  
  if ( !fs.existsSync(srcFile) ) {
    console.log(`${srcFile} not exist`);
    process.exit(1);
  }
  
  let srcTable = parseCsv( fs.readFileSync(srcFile, { encoding: 'utf8' }) );
  let raundsCount = parseInt(srcTable.length / pseudoThreads) + 1;
  
  // prepare output file
  if ( !fs.existsSync(dstFile) ) {
    fs.writeFileSync(dstFile, outHeaders.join(',') + '\n', { encoding: 'utf8' });
  }
  
  for (let raund=0; raund<raundsCount; raund++) {
    let promises = [];
    
    for (let i=0; i<pseudoThreads; i++) {
      let index = raund * pseudoThreads + i;
      
      if ( srcTable[ index ] )
        if( srcTable[ index ].type && srcTable[ index ].addr && srcTable[ index ].port )
          promises.push(check(srcTable[ index ], testWebsite, bruteForce));
    }
    
    let results = await Promise.all(promises);
    let outString = '';
    for (let result of results) {
      let cols = [];
      
      for (let header of outHeaders) {
        cols.push(result[ header ]);
      }
      
      outString += cols.join(',') + '\n';
    }
    
    fs.writeFileSync(dstFile, outString, { encoding: 'utf8', flag: 'a' });
  }
  
  process.exit(0);
}

main();
