'use strict';
'use ndb';

/**
 * @linc0 NBase/_Md/_Index/_HPW/Part_I/content/Courses/Fundamentals/arrObjClassProto/Prototype-master/JavaScript/1-object-1.js
 * @link1 NBase/_Md/_Index/_HPW/Part_I/content/Courses/Fundamentals/arrObjClassProto/Iteration-master/JavaScript/f-iterator_3_obj.js
 * @param obj : Object
 * @param ToString : Function
 * @param SymbolIterator {Function}
 * @constructor
 */
const AddToObjectStructure_1 = ( obj = {}, ToString = new Function(), SymbolIterator = new Function()) => {
    obj.__proto__.toString = ToString;
    obj.__proto__[Symbol.iterator] = SymbolIterator;
};

