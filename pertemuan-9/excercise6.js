//1
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    console.log(
        retirement > 0 
            ? `${firstName} retires in ${retirement} years` 
            : `${firstName} is already retired.`
    );
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

//2.
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.
const phi = 3.14;
const power = 2;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let area21 = calculateArea({ radius: 21, power });
let area7 = calculateArea({ radius: 7, power });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');
