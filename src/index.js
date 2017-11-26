import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0, 0.00');
// note NOT using apostrophes but back ticks for ES6 tiplet string feature
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
