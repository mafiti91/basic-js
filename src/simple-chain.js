const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],

  getLength() {
    let lengthChain = his.arr.length;
    return lengthChain;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || !position || Number.isInteger(position) !== true || this.arr[position] === undefined || position > this.arr.length || position < 0) {
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!')
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    };
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
