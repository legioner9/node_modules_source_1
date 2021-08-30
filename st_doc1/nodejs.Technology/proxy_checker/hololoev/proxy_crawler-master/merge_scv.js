'use strict';

const fs = require('fs');
const writeCSV = require('./libs/writeCSV');

function parseCsv(srcString) {
  let result = [];
  let headers = [];
  let lines = srcString.split('\n');
  
  for (let name of lines[ 0 ].split(',')) {
    headers.push(name.trim());
  }
  
  for (let lineIndex = 1; lineIndex<lines.length; lineIndex++) {
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

function main() {
  if ( !process.argv[ 2 ] || !process.argv[ 3 ] ) {
    console.error('Not enough arguments');
    console.error('usage: node merge_scv.js src_dir dst_scv_file');
  }
  
  let dirFiles = fs.readdirSync(process.argv[ 2 ], { encoding: 'utf8' });
  let result = {};
  
  for (let fileName of dirFiles) {
    if ( /.csv$/gi.test(fileName) ) {
      console.log('File:', fileName);
      
      let curSCV = parseCsv(fs.readFileSync(`${process.argv[ 2 ]}/${fileName}`, { encoding: 'utf8' }));      
      for (let line of curSCV) {
        result[ line.addr + ':' + line.port ] = line;
      }
    }
  }
    
  // Then save results
  let resArray = [];
  for (let key in result) {
    resArray.push(result[ key ]);
  }
  
  writeCSV(process.argv[ 3 ], resArray);
} 

main();