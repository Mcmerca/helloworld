//Övning 1//

/* let age = 14;
let hasTicket = true;
let withAdult = true;

if (age >= 15 && hasTicket == true) {
    console.log("Välkommen in");    
}
else{
    console.log("Denied")
} */

//Övning 2//

/* const isLoggedIn = true;
const userRole = "admin";

if (isLoggedIn === true) {
    if (userRole ==="admin") {
        console.log("Välkommen till admin-menyn")        
    } else {
        console.log("Välkommen användare")
    }
} else {
    console.log("Du måste logga in")
} */

//Övning 3//

/* const trafficLight = "röd";

switch (trafficLight) {
    case "grön":
        console.log("Kör");
        break;
    case "gul":
        console.log("stanna om det är säkert");
        break;
    case "röd":
        console.log("Stanna");
        break;
    default:
        console.log("Okänd signal");
        break;
} */

//Övning 4//

/* const weather = "snö";

switch (weather) {
    case "regn":
        console.log("Ta med paraply, det regnar.")
        break;
    case "sol":
        console.log("Glöm inte solglasögon");
        break;
    case "snö":
        console.log("Ta på dig en varm jacka, det är svinkallt");
        break;
    default:
        console.log("Kolla väderappen igen")
        break;
} */

//övning 5//

/* for (let i = 1; i < 6; i++){
    console.log(i);
} */

/* const fruits = ["banan", "äpple", "körsbär"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} */

//Övning 1

/* const valkommen = (namn, titel = "medlem") => {
    return `Välkommen ${namn} din roll är ${titel}`
}

console.log(valkommen("Sonny", "admin")) */

//Övning 2

/* const provPoang = [18, 22, 15, 28, 20];

const raknaMedel = (provPointsArr) => {
    let summa = 0;

    for (const point of provPointsArr){
        summa += point;
    }

    return summa / provPointsArr.length;
}


console.log(`Medelpoäng på provet: ${raknaMedel(provPoang)}`)
 */

//Övning

/* const kunder = [
    { namn: "Mia", VIP: true , kopSumma: 1200},
    { namn: "Sam", VIP: false, kopSumma: 450},
    { namn: "Robin", VIP: true, kopSumma: 800},
]

const getVipBonus = (kundArr) => {
    const result = [];

    for (const kund of kundArr) {
        if (kund.VIP === true) {
            const nyttPris = kund.kopSumma * 0.9
            const vipKund = { namn: kund.namn, kopSumma: nyttPris}
            result.push(vipKund)
        }
    }
    
    return result;
}

console.log(getVipBonus(kunder))
 */

//Vecka 2 Genomång torsdag
//Djupdyka i vad higher order function (HOF) och callback function är REPETERA DETTA!
//Metod och Fn är egentligen samma sak, skillnaden är att metod är en funktion i ett objekt.

////////////////////////            V44                 /////////////////////////////

//Kvällsövning sortering, filtrering, push & vilkor för att pusha genom en funktion
/* const lista = [14, 1, 55, 32, 12, 7, 5, 4, 44];

const sortedList = (nummerLista) => {
    
    const resultat = []

    const sortering = nummerLista.sort((forsta, sista) => forsta - sista);
    const onlyEven = sortering.filter(even => even % 2 === 0)
    const odd = sortering.filter(odd => odd % 2 !== 0)

    if(onlyEven.length > odd.length){
        resultat.push(onlyEven)
    } else {
        resultat.push(odd)
    }

    return resultat;
}

console.log(sortedList(lista));

 */

//Torsdagsövning egen callback funktion

/* const versaler = (str) => str.toUpperCase()
const citera = (str) => `"${str}"`

const formateraText = (text, callback) => callback(text);


console.log(formateraText("hejSan i veRsaLeR", versaler));
console.log(formateraText("Nu är texent citerat", citera)); */

//Att tänka på är att där inte ska vara måsvingar i funktions deklarationerna efter =>


//Torsdagsövning map och filter
/* const tal = [4, 15, 8, 25, 2];

const aboveTen = tal.filter(overTen => overTen > 10);
const addFive = aboveTen.map(add => add + 5)

console.log(aboveTen);
console.log(addFive);
 */

// Måndagsövning 1 

/* const valkommen = (namn, titel = "Medlem") => {
    return `Välkommen ${titel} ${namn} !`;
}

console.log(valkommen("Sonny", "Admin"));
console.log(valkommen("Shanshan"))
 */

//Måndagsövning 2

/* const provpoang = [18, 22, 15, 28, 20];

const rakenaMedel = (pointsArray) => {
    let sum = 0

    for(point of pointsArray){
        sum += point
    }
    
    const medel = sum/pointsArray.length

    return medel
}

console.log(`Medlpäng på provet: ${rakenaMedel(provpoang)}`);
 */

//Måndagsövning 3

/* const kunder = [
    { namn: "Mia", vip: true, kopSumma: 1200},
    { namn: "Sam", vip: false, kopSumma: 450},
    { namn: "Robin", vip: true, kopSumma: 800}
]

const getVipBonus = (customerArray) => {
    const result = [];
    

    for (const kunder of customerArray) {
        const nyttPris = kunder.kopSumma * 0.9;

        if(kunder.vip){
            result.push(kunder.namn, nyttPris);
        }
    }

    return result;
}

console.log(getVipBonus(kunder));
 */
//Tänk på scopet till nästa gång, lade först nyttPris variabeln utanför For-of loopen vilket gav NaN på köpsumman.vs

/////////////////////////////           Repetition V45          ///////////////////////

/* const versaler = (str) => {
    return str.toUpperCase()
}

const citera = (str) => {   //Vanligt vis
    return `"${str}"`
}

// const citera = (str) => `"${str}"`      <--- Oneliner, fungerar utan måsvingar.

const formateraText = (text, callback) => {
    return callback(text);
}

const myName = formateraText("sonny", citera);

console.log(myName);
 */

/* const tal = [4, 5, 13, 34, 22, 11];

const overTio = tal.filter((siffra) => siffra > 10);
const adderaFem = overTio.map(siffra => siffra + 5);

console.log(tal + "\n" + overTio + "\n" + adderaFem );
 */

//Torsdag Övning 1

const stader = ["Stockholm", "Göteborg", "Malmö"]

stader.push("Uppsala");

const tvaStader = stader.slice(0, 2);

console.log(`Original array: ${stader} \n Slicead array:${tvaStader}`);

