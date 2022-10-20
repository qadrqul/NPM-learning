const moment = require('moment');
const unique = require('uniq')

const today = new Date;
const myDate = moment(today).format('LL LL');

const myList = [1, 1, 1, 4, 3, 3, 4, 78, ,8,6,6 ,6,7,7];
const myUniqueList = unique(myList);

console.log(myDate)
console.log(myUniqueList)
document.write("Date: " + myDate)
document.write("<br>")
document.write("Unique numbers from myList = [1, 1, 1, 4, 3, 3, 4, 78, ,8,6,6 ,6,7,7]: " + "<br>" + myUniqueList)