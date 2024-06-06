const day1 = 400
const day2 = 366

let year1 = day1 / 365
let year2 = day2 / 365
let month1 = (day1 - 365) / 30
let month2 = (day2 - 365) / 30
let sisa1 = day1 - 365 - 30
let sisa2 = day2 - 365

// Math.floor(year1)
// Math.floor(year2)
// Math.floor(month1)
// Math.floor(month2)
console.log(Math.floor(year1) + ` year,` + (Math.floor(month1)) + ` month,` + (sisa1) + ` day.`)
console.log(Math.floor(year2) + ` year,` + (Math.floor(month2)) + ` month,` + (sisa2) + ` day.`)