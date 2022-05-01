const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!';
  if(!date.getMonth  || Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!');
  let mounth = date.getMonth()
  let result = (mounth < 2) ? 'winter' :
  (mounth < 5) ? 'spring' :
  (mounth < 8) ? 'summer' :
  (mounth < 11) ? 'autumn' :
  'winter';
  return result;
}

module.exports = {
  getSeason
};
