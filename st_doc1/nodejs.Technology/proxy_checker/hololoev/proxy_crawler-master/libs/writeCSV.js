
const fs = require('fs');

const outHeaders = [ 'addr', 'port', 'type' ];

function writeCSV(outFile, data) {
  let str = outHeaders.join(',') + '\n';
  
  for (let line of data) {
    let outCol = [];
    
    for (let h of outHeaders) {
      if ( line[ h ] ) {
        outCol.push(line[ h ]);
      } else {
        outCol.push('');
      }
    }
        
    str += outCol.join(',') + '\n';
  }
  
  fs.writeFileSync(outFile, str, { encoding: 'utf8' });
}

module.exports = writeCSV;
