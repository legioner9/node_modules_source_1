# interface command line

## using stdin , stdout construct 'command question line' 
example is 7-login.js
### ques_1.js
### ques_2.js question + menu + action
### ques_3.js fore shell bash 

I cannot pass array inside JS as argument bash fun ques_3

$ ques_3 "[2,4]" // well done

ues_3 "[2,4,"rty"]" 

{ obj: '[2,4,rty]' }
undefined:1
[2,4,rty]
     ^

SyntaxError: Unexpected token r in JSON at position 5
    at JSON.parse (<anonymous>)
    at Object.f_run [as r] (E:\Node_projects\Node_Way\node_modules\st_doc1\nodejs.org_DOCS.v.2\CommandLine\Way\ques_3.js:56:29)
    at ReadStream.<anonymous> (E:\Node_projects\Node_Way\node_modules\st_doc1\nodejs.org_DOCS.v.2\CommandLine\Way\ques_3.js:112:30)
    at Object.onceWrapper (events.js:422:26)
    at ReadStream.emit (events.js:315:20)
    at addChunk (_stream_readable.js:295:12)
    at readableAddChunk (_stream_readable.js:271:9)
    at ReadStream.Readable.push (_stream_readable.js:212:10)
    at TTY.onStreamRead (internal/stream_base_commons.js:186:23)




$ ques_3 "[2,4,"rty"]"

