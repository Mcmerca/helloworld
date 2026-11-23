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

/* const stader = ["Stockholm", "Göteborg", "Malmö"]

stader.push("Uppsala");

const tvaStader = stader.slice(0, 2);

console.log(`Original array: ${stader} \n Slicead array:${tvaStader}`);
 */

//Torsdag Övning 2

/* const temp = [12, 18, 25, 8, 30, 15];

const newTemp = temp.filter((value) => value > 15).map((value) => value * 2)

console.log(newTemp); */

// V47 måndag 

/* const parseUserData = (jsonString) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.error("Failed to parse JSON: ", error.message)
    return null
  } finally{
    console.log("JSON Parsing finished");
    
  }
};

// Test calls:
parseUserData('{"username": "alex99"}'); // Returns object
parseUserData('Invalid JSON'); // Returns null */

//testdata

/* let braJson = '{"namn": "Anna", "alder":25}';
let daligJson = 'Detta är inte JSON';

const parseUser = ((str) => {
    try {
        return JSON.parse(str)
    } catch (error) {
        console.error("Ogiltlig data: ", error.message)
        return null
    }
})

console.log("Första testet: ", parseUser(braJson));
console.log("Andra testet: ", parseUser(daligJson));

 */

/* let allaAnvandare = [
    {id: 1 , namn: "Bo"},
    {id: 2, namn: "Sara"}
];

const sokId = ((id, lista) => {
    try {
        let result = lista.find(user => user.id === id);
        
        if(result === undefined){
            throw new Error("Användaren hittades inte");
        } else {
            return result.namn;
        }
    } catch (error) {
        console.error(error.message)
    }
})

console.log(sokId(3, allaAnvandare)); */

// Workshop uppgift V47

// 1 Validera datatyper med hjälp av tyoeof och kasta ett felmeddelande "Bort arguments must be numbers"
// 2 Se till att det inte går att dividera med 0
// 3 returnera resultat om allting går genom valideringen
// 4 Kalla på funktionen i ett try/cath/finally block och kalla med matning som bör ge fel

/* const divide = ((a,b) => {
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Both arguments must be numbers");
    }
    if(b === 0){
        throw new Error("Division by zero is prohibited");
    }

    return a / b;

});

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error)
} finally {
    console.log("Calculation attempted");
} */

//Övning 1 defensiv kod

/* const processPayment = (balance, amount) => {
    let totalBalance = 0;

    if (typeof balance !== "number" || Number.isNaN(balance) || typeof amount !== "number" || Number.isNaN(amount)) {
        throw new Error("Balance and amount must be an integer");
    }
    if (amount < 1) {
        throw new Error("Value must. be greater than zero");
    }
    if (amount >= balance) {
        throw new Error("Transaction blocked due to insufficent funds in balance");
    }

    totalBalance = balance - amount

    return `Your checking account has ${totalBalance}kr. The withdrawn amount is ${amount}kr`
}

//console.log(processPayment(500, -100));       Blockeras pga negativt tal i amount
//console.log(processPayment(500, 900));        Blockeras pga övertrassering
//console.log(processPayment("500", null));     TypeError pga att input endast accepterar integers
//console.log(processPayment(1000, 200));       Går genom. */

// Övning 2, debugga AI kod

/* const users = [     //mockdata
    {id: 1, isActive: false, age: 10},
    {id: 2, isActive: false, age: 0},
    {id: 3, isActive: false, age: 20},
    {id: 4, isActive: false, age: 65}
]

 const getAverageActiveAge = (users) => {
  let sum = 0;
  for (const u of users) {
    if (u.isActive === true) {
      sum += u.age;
    }
  }
  if (sum <= 0) {
    throw new Error("Zero active users, active can't be calculated");
  }
  return sum / users.isActive;
}; 

const getAverageActiveAge = (users) => {
  if (!Array.isArray(users)) return 0;
  let sum = 0;
  let activeCount = 0;

  for (const u of users) {
    if (u?.isActive === true && typeof u.age === "number") {
      sum += u.age;
      activeCount++;
    }
  }
  return activeCount === 0 ? 0 : sum / activeCount;
};

console.log(getAverageActiveAge(users));
 */

//V48 Måndag

// Övning 1 Vilken kod skrivs ut först

/* console.log("Apple");       // 1.

setTimeout(() => {
  console.log("Banana");    // 4.
}, 1000);

setTimeout(() => {
  console.log("Cherry");    // 3.
}, 0);

console.log("Date");        // 2. */

//Övning 2

const products = [
    {name: "Kaffe", price: 150 },
    {name: "Mjölk", price: 20 },
    {name: "Ost", price: 102 },
    {name: "4", price: 70 }
]

console.log("Loading cheap items");


    setTimeout(() => {
        const cheapProducts = products.filter((item) => item.price < 100)

        for(let item of cheapProducts){
            console.log(`Item name: ${item.name} costs: ${item.price}`);
        }
        
    },2000)



