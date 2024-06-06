// for (let i = 1; i <= 10; i++){
//     console.log(`Hello World ke-${i}`)
// }

let i = 1 
// while (i <= 10) {
//     console.log("Hello");
//     i++
// }

// do {
//     console.log("Hello");
//     i++
// } while (i <= 2)



// while (true) {
//     console.log(i)
//     if (i == 12) break
//     i++
// }

// 

let n = 5

// for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i))
// }


for (let i = 1; i <= n; i++) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star += "*"
    }
    console.log(star);
}