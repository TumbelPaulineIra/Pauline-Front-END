//synchronus JS

//synchronus -> single thread -> blocking
// console.log("Proses 1")
// console.log("Proses 2")
// console.log("Proses 3")
// console.log("Proses 4")

//asynchronus -> multithread ->  non block
// //paralel
// setTimeout(() => {
//     console.log("Proses 1")
// }, 3000);

// console.log("Proses 2")

// setTimeout(() => {
//     console.log("Proses 3")
// }, 3000);

// //concurrent
// setTimeout(() => {
//     console.log("Proses 1")
//     setTimeout(() => {
//         console.log("Proses 2")
//         setTimeout(() => {
//             console.log("Proses 3")
//             setTimeout(() => {
//                 console.log("Proses 4")
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

// //promise
// //promise sederhana

// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil")
//     } else {
//         reject("Gagal")
//     }
// })

// newPromise
// .then((result)) => console.log((result))
// .cath((error)) => console.log((error))



//fetch
fetch("http://jsnoplancholder.typicode.com/users")
.then((response) => Response.json())
.then((json) => console.log(json))

(async () => {
    let response = await fetch("http://jsnoplancholder.typicode.com/users")
    let json = await response.json()
    json.forEach(({ name }) => {
        console.log(name)
    });
})