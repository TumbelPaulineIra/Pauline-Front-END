//rest parameter harus berada di akhir
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
}
func1("A", "B", "C", "D", "E")

//fungsi dengan rest parameter
const func2 = (...params) => {
    console.log(params)
}
func2("A", "B", "C", "D", "E")

const func3 = (param1, param2, ...params) => {
}
func3("A", "B", "C", "D", "E")

//array
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(...numbers)

//duplikasi array
let numbers2 = [numbers]
console.log(numbers2)

//menggunakan array
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let number3 = arr1.concat(arr2, arr3)
let number4 = [...arr1, ...arr2, ...arr3]