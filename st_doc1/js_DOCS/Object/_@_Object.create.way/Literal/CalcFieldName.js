'use strict';
'use ndb';

const name = 'legioner';
const obj = {};
const f = d => 'sir' + d;
obj[f ( name ) + ' NameField'] = f ( name.toUpperCase () ) + ' VolumeField';
// obj: {sirlegioner NameField: "sirLEGIONER VolumeField"}
debugger
