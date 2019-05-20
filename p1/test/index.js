var _ref, _ref2, _ref3, _;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const double = n => n * 2;

const increment = n => n + 1;

export const pipelineValue = (_ref = (_ref2 = (_ref3 = (_ = 5, double(_)), double(_ref3)), increment(_ref2)), double(_ref));
export class X {
  constructor() {
    _defineProperty(this, "f1", 123);

    _f.set(this, {
      writable: true,
      value: 321
    });
  }

  async test() {
    return 123;
  }

}

var _f = new WeakMap();