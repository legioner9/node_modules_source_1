'use strict';

const { _require } = require('st_require');
const arht = new (_require('_aop').archetypes.class.arht);
const _node = _require('_node');
const _util = _require('_util');
const _praevia = _require('_praevia');

const getVisProto = _praevia.getVisProto;

class A {
  constructor(a = '') {
    this.a = a;
  }

  what_a() {
    console.log(this.a);
  }
}

class B extends A {
  constructor(a, b = '') {
    super(a);
    this.b = b;
  }

  what_b() {
    console.log(this.b);
  }
}

class C extends B {
  constructor(a, b, c = '') {
    super(a, b);
    this.c = c;
  }

  what_c() {
    console.log(this.c);
  }
}

const c = new C();

let c1 = Object.defineProperty(c, 'd', { value: 'd' });

//ostentans_obiectum

const obiectum_umbra = obj => {
  const imago = [];
  let count = 0;
  const props = Object.getOwnPropertyNames(obj);
  const own = {};
  props.map(item => {
    own[item] = obj[item];
  });
  imago.push(own);

  const getProto = ob => {
    if (ob.__proto__) {
      const value = ob.__proto__;
      let name;
      if (value.constructor.name) name = value.constructor.name;
      else name = count++;
      const props = Object.getOwnPropertyNames(value);
      const o = {};
      o[name] = {};
      props.map(item => {
        o[name][item] = value[item];
      });
      imago.push(o);
      getProto(value);
    }

  };
  getProto(obj);

  return imago;
};

debugger
const obi = obiectum_umbra(c1);
c1 = {};
