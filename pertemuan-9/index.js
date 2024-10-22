// string literals

let fullName = "John"
let age = 30
address = "Manado"

//halo nama saya John, umur saya 30 tahun
//dan saya tinggal di manado

let kalimat1 = "Halo nama saya " + fullName + " umur saya " + age + "tahun dan saya tinggal di" + address

console.log(kalimat1)

let kalimat2 = `Halo nama saya ${fullName}`
console.log(kalimat2)

// Array Function
function sayGreetings1(fullName) {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings1("John Doe"))

const sayGreetings2 = () => `Hello my name is ${fullName}`
console.log(sayGreetings2("John Doe"))

//arrow function pada callback func
let numbers = [1, 2, 3, 4, 5]
let output2 = numbers.map((item) => item)
console.log(output2)

//default parameter
const sayGreetings3 = (fullName) => {
    if (fullName) {
        fullName = "John Doe"
    }
    console.log(
        `Halo nama saya ${fullName}`
    )
}

sayGreetings3("stenly")