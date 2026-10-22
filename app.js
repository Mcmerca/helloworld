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

const weather = "snö";

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
}