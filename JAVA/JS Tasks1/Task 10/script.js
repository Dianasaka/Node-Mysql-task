/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import {one, two, three, four, five } from "./modules/numbers/numbers.js";
import {composition} from "./modules/math/composition.js";
import {division} from "./modules/math/division.js";
import {multiplication} from "./modules/math/multiplication.js";
import substraction from "./modules/math/subtraction.js";


const a = composition(one, four);
const b = division(four, two);
const c = substraction(three, two);
const d = multiplication(five, two);


console.log(a);
console.log(b);
console.log(c);
console.log(d);
