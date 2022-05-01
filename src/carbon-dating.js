const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (!Number(sampleActivity)) return false;
  if(parseFloat(sampleActivity) >= 15 ) return false; 
  if(parseFloat(sampleActivity) <= 0) return false;
  let MODERN_ACTIVITY = 15;
  let HALF_LIFE_PERIOD = 5730;
  k = -0.693 / HALF_LIFE_PERIOD;
  result = Math.ceil((Math.log(parseFloat(sampleActivity)/ MODERN_ACTIVITY)) / k);
  return result;

}

module.exports = {
  dateSample
};
