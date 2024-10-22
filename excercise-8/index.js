import { yearUntilRetirement } from './CalculateAgeAndRetirement.js';
import { addNumbers } from './AddNumbersUsingReduce.js';
import { calculateArea } from './CalculateArea.js';
import { makeAjaxRequest } from './MakeAjaxRequest.js';


yearUntilRetirement({ year: 1987, firstName: 'John' });
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
console.log(calculateArea({ radius: 21, power: 2 }));
makeAjaxRequest('www.google.com');