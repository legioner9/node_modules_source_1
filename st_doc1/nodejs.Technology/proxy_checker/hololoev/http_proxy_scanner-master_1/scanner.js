#!/bin/node

'use strict';

const fs = require('fs');
const colors = require('colors');
var portscanner = require('portscanner');

const defaultPorts = [ 8000, 8080, 8888, 3128 ];
const outHeaders = [ 'addr', 'port', 'type', 'time' ];

function parseIPv4(str) {
  let result = [];
  
  let parts = str.trim().split('.');
  if ( parts.length != 4 ) {
    return null;
  }
  
  for (let part of parts) {
    let byte = parseInt(part);
    if ( byte < 0 ) {
      return null;
    }
    
    if ( byte > 255 ) {
      return null;
    }
    
    result.push(byte);
  }
  
  return result;
}

function incIPv4(addr) {
  addr[ 3 ]++;
  
  for (let index=3; index>0; index--) {
    if ( addr[ index ] > 255 ) {
      addr[ index - 1 ]++;
      addr[ index ] = 0;
    }
  }
  
  if ( addr[ 0 ] > 255 ) {
    return null;
  }
  
  return addr;
}

function Ipv4IntValue(addr) {
  return addr[ 3 ] + ( addr[ 2 ] * 255 ) + ( addr[ 1 ] * 255 * 255 ) + +( addr[ 1 ] * 255 * 255 * 255 );
}

function Pscan(addr, port) {  
  return new Promise( function(resolve) {
    portscanner.checkPortStatus(port, addr, function(error, status) {
      resolve(status);
    });
  });  
}

async function scan(addr, ports) {
  let strAddr = addr.join('.');

  let testStart = new Date();
  for (let port of ports) {
    let status = await Pscan(strAddr, port);    
    if ( status === 'open' ) {
      let testTime = new Date() - testStart;
      console.log(colors.green(`${strAddr}:${port} time: ${testTime}`));
      return {
        addr: strAddr,
        port: port,
        type: 'HTTP',
        time: testTime
      };
    }
  }
  
  let testTime = new Date() - testStart;
  console.log(colors.red(`${strAddr} time: ${testTime}`));
  
  return null;
}

async function main() {
  
  if ( process.argv.length < 5 ) {
    console.error(colors.red('Not enough arguments, usage:'));
    console.log('node scanner.js ipv4_start_add ipv4_stop_addr out_file.csv [ optional pseudo_threads_count ]');
    console.log('Example:');
    console.log('node scanner.js 127.0.0.0 127.0.0.1 ./out_file.csv 5');
    process.exit(1);
  }
  
  const startADDR = parseIPv4(process.argv[ 2 ]);
  const stopADDR = parseIPv4(process.argv[ 3 ]);
  const dstFile = process.argv[ 4 ];
  let pseudoThreads = 1;
  
  if ( process.argv[ 5 ] ) {
    pseudoThreads = parseInt(process.argv[ 5 ]);
  }
  
  if ( startADDR === null ) {
    console.error(colors.red('Wrong start addr: ' + process.argv[ 2 ]));
    process.exit(1);
  }
  
  if ( stopADDR === null ) {
    console.error(colors.red('Wrong stop addr: ' + process.argv[ 3 ]));
    process.exit(1);
  }
  
  // prepare output file
  if ( !fs.existsSync(dstFile) ) {
    fs.writeFileSync(dstFile, outHeaders.join(',') + '\n', { encoding: 'utf8' });
  }
  
  let curAddr = startADDR.map( item => item);
  let eof = false;
  let addrScanned = 0;
  let scanStart = new Date();
  
  while ( !eof ) {
    let promises = [];
    
    for (let tc=0; tc<pseudoThreads; tc++) {
      addrScanned++;
      if ( curAddr === null ) {// The end of IPv4 network
        eof = true;
        break;
      }
      
      if ( Ipv4IntValue(curAddr) > Ipv4IntValue(stopADDR) ) {
        eof = true;
        break;
      }
      
      promises.push(scan(curAddr, defaultPorts));
      
      curAddr = incIPv4(curAddr);
    }
    
    let results = await Promise.all(promises);
    let outString = '';
    
    for (let result of results) {
      if ( result !== null ) {
        let cols = [];
        
        for (let header of outHeaders) {
          cols.push( result[ header ] );
        }
          
        outString += cols.join(',') + '\n';
      }
    }
    
    if ( outString !== '' ) {
      fs.writeFileSync(dstFile, outString, { encoding: 'utf8', flag: 'a' });
    }
  }
  
  console.log('Done!');
  console.log('Addresses scaned:', addrScanned, 'scan time:', new Date() - scanStart, 'ms');
  process.exit();  
}

main();
