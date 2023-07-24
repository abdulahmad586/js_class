/*

IF/ELSE
TERNARY 
SWITCH/CASE
OPERATORS: || && != == ! > < <= >= 

*/

// const a = 18;

// if (a < 18) {
//     console.log("You are underage");
// } else if (a == 18) {
//     console.log("You are on the border");
// } else {
//     console.log("You are an adult");
// }

// const response = a < 18 ? "You are underage" : (a == 18 ? "You are at the border" : "You are an adult");
// console.log(response);

// const userType = "Guest"; //"Admin",Guest, Normal

// switch (userType) {
//     case "Admin":
//         console.log("Welcome to our website, Admin");
//         break;
//     case "Normal":
//         console.log("Welcome to our website, your access is limited");
//         break;
//     case "Guest":
//         console.log("You are a guest,");
//     default:
//         console.log("No guests allowed at the moment");
// }

//OPERATORS: || && != == ! > < <= >= 
/*
|| = OR
&& = AND
!= = NOT EQUAL TO
== = EQUAL TO
!  = NOT
>  = GREATER THAN
<  = LESS THAN
>= = GREATER THAN OR EQUAL TO
<= = LESS THAN OR EQUAL TO
*/

const age = 23;
const isUnderage = age <= 18;

console.log("Is not underage?:", !isUnderage);