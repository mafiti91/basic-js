const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let AddArr = []
  let AddArr2 = []
  let FirstStr = ""
  let FinishStr = ""

  if (str !== "") str = String(str);
  if (options.addition !== "") options.addition = String(options.addition);
  if (options.separator === "" || typeof options.separator === "undefined") options.separator = "+";
  if (options.additionSeparator === "" || typeof options.additionSeparator === "undefined") options.additionSeparator = "|";

  if (typeof options.additionRepeatTimes !== "undefined" && options.additionRepeatTimes > 0) {  
      for (let i = 0; i < options.additionRepeatTimes; i++) { 
        AddArr.push(options.addition)
        AddArr.push(options.additionSeparator)  
      }
    AddArr.pop()
    AddArr.unshift(str)
    FirstStr = AddArr.join("")
  } else {
    AddArr.push(options.addition)
    AddArr = AddArr.filter((el) => {
      return el !== "undefined"
    })
    AddArr.unshift(str)
    FirstStr = AddArr.join("") 
  }

  if (typeof options.repeatTimes !== "undefined" && options.repeatTimes > 0) {  
    for (let i = 0; i < options.repeatTimes; i++) {  
    AddArr2.push(FirstStr)
    AddArr2.push(options.separator)
    }
  AddArr2.pop()
  FirstStr = AddArr2.join("")
}     

return(FirstStr)
}

module.exports = {
  repeater
};
