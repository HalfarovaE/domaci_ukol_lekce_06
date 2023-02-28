
const datum = prompt("Jaké je datum? Napiš ve formátu dd.mm.yyyy.")

console.log(datum)

const den = datum.slice(0,2)
console.log(den)
const mesic = datum.slice(3,5)
console.log(mesic)
const rok = datum.slice(-4)
console.log(rok)

document.body.innerHTML = "den: " + den + "." + " měsíc: " + mesic + "." + " rok " + " " + rok
const parseDate =(datum) =>{

return {
    den: datum.slice(0,2),
    mesic: datum.slice(3,5),
    rok: datum.slice(-4),
}

}

console.log(parseDate("12.03.2013"))




