// Pokemon API Examples
// Base URL for Pokemon API
const POKEMON_API_BASE = "https://pokeapi.co/api/v2/pokemon/";

// ================================
// 1. CALLBACK FUNCTION EXAMPLE             
// ================================

// Traditional callback function for fetching Pokemon data
// function fetchPokemonWithCallback(pokemonName, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', POKEMON_API_BASE + pokemonName);

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const pokemon = JSON.parse(xhr.responseText);
//             callback(null, pokemon);
//         } else if (xhr.readyState === 4) {
//             callback(new Error('Pokemon not found'), null);
//         }
//     };

//     xhr.send();
// }

// // Using the callback function
// console.log('=== CALLBACK EXAMPLE ===');
// fetchPokemonWithCallback(2, function(error, pokemon) {
//     if (!error) {
//         console.log('Callback Result:');
//         console.log(`Name: ${pokemon.name}`);
//         console.log(`Height: ${pokemon.height}`);
//         console.log(`Weight: ${pokemon.weight}`);
//         console.log(`Base Experience: ${pokemon.base_experience}`);
//     }
//     else{
//         console.log("Error occurred:");
//         console.error(error.message);
//     }
// });

// // ================================
// // 3. PROMISE WITH .THEN EXAMPLE
// // ================================

// // Promise-based function for fetching Pokemon
// function fetchPokemonWithPromise(pokemonName) {
//     return fetch(POKEMON_API_BASE + pokemonName.toLowerCase())
//         .then(response => response.json());
// }

// // Function to get Pokemon species information
// function fetchPokemonSpecies(speciesUrl) {
//     return fetch(speciesUrl)
//         .then(response => response.json());
// }

// // Using Promises with .then() - no catch statements
// console.log('\n=== PROMISE WITH .THEN EXAMPLE ===');

// fetchPokemonWithPromise('blastoise')
//     .then(pokemon => {
//         console.log('Promise Result:');
//         console.log(`Name: ${pokemon.name}`);
//         console.log(`ID: ${pokemon.id}`);
//         console.log(`Height: ${pokemon.height} decimeters`);
//         console.log(`Weight: ${pokemon.weight} hectograms`);

//         // Return species URL for next .then()
//         return pokemon.species.url;
//     })
//     .then(speciesUrl => {
//         console.log('Fetching species information...');
//         return fetchPokemonSpecies(speciesUrl);
//     })
//     .then(species => {
//         console.log(`Species: ${species.name}`);
//         console.log(`Generation: ${species.generation.name}`);
//         console.log(`Is Legendary: ${species.is_legendary}`);
//         console.log(`Is Mythical: ${species.is_mythical}`);

//         // Find English flavor text
//         const englishFlavorText = species.flavor_text_entries
//             .find(entry => entry.language.name === 'en');

//         if (englishFlavorText) {
//             console.log(`Description: ${englishFlavorText.flavor_text.replace(/\n/g, ' ')}`);
//         }
//     });

// // ================================
// // 5. SEQUENTIAL PROMISE CHAIN
// // ================================

// console.log("\n=== SEQUENTIAL PROMISE CHAIN ===");

// // Chain multiple Pokemon fetches sequentially
// fetch(`${POKEMON_API_BASE}1`)
//   .then((response) => response.json())
//   .then((pokemon1) => {
//     console.log(
//       `First Pokemon: ${pokemon1.name} (${pokemon1.types
//         .map((t) => t.type.name)
//         .join(", ")})`
//     );
//     return fetch(`${POKEMON_API_BASE}2`);
//   })
//   .then((response) => response.json())
//   .then((pokemon2) => {
//     console.log(
//       `Second Pokemon: ${pokemon2.name} (${pokemon2.types
//         .map((t) => t.type.name)
//         .join(", ")})`
//     );
//     return fetch(`${POKEMON_API_BASE}3`);
//   })
//   .then((response) => response.json())
//   .then((pokemon3) => {
//     console.log(
//       `Third Pokemon: ${pokemon3.name} (${pokemon3.types
//         .map((t) => t.type.name)
//         .join(", ")})`
//     );
//     console.log("Evolution chain fetching complete!");
//   })
//   .catch((error) => {
//     console.error("Error fetching Pokemon data:", error);
//   });

// ================================
// //Async and Await 
// ================================

// async function getFirstPokemon() {
//   const result = await fetch(`${POKEMON_API_BASE}1`);
//   console.log(result);
// }

// //Would be Pending state
// //Wrong Approch
// // function hello(){
// //      const result = fetch(`${POKEMON_API_BASE}1`);
// //      console.log(result)
// //     }

// async function getFourPokemons() {
//   const result1 = await fetch(`${POKEMON_API_BASE}1`);
//   console.log(result1);
//   const result2 = await fetch(`${POKEMON_API_BASE}2`);
//   console.log(result2);
//   const result3 = await fetch(`${POKEMON_API_BASE}3`);
//   console.log(result3);
//   const result4 = await fetch(`${POKEMON_API_BASE}4`);
//   console.log(result4);
// }
// ================================
// //Async and Await with Error Handling
// ================================

// async function getFourPokemonsWithErrorHandling() {
//   try {
//     const result1 = await fetch(`${POKEMON_API_BASE}1`);
//     console.log(result1);
//     const result2 = await fetch(`${POKEMON_API_BASE}2`);
//     console.log(result2);
//     const result3 = await fetch(`${POKEMON_API_BASE}3`);
//     console.log(result3);
//     const result4 = await fetch(`${POKEMON_API_BASE}4`);
//     console.log(result4);
//   } catch (e) {
//     console.log("Error Occurred", e);
//   }
// }
// const results =[];
// fetch(`${POKEMON_API_BASE}1`).then((res)=> res.json()).then((data)=>results.push(data));
// fetch(`${POKEMON_API_BASE}2`).then((res)=> res.json()).then((data)=>results.push(data));
// fetch(`${POKEMON_API_BASE}3`).then((res)=> res.json()).then((data)=>results.push(data));

// ================================
//Promise All
// ================================

//This promise will only be Reolved 
//If all the promises are resolved
//If any one of the promise is rejected then the whole promise will be rejected
// const fetches = [
//   fetch(`${POKEMON_API_BASE}1`),fetch(`${POKEMON_API_BASE}2`),fetch(`${POKEMON_API_BASE}3`)]


//   Promise.all(fetches).then(resluts=>{
//     console.log("All the promises are resolved");
//     console.log(resluts);
//   }).catch(e=>{
//     console.log("One of the promises is rejected");
//     console.log(e);
//   });



//   async function getAllPokemons(){
//     const fetches = [
//       fetch(`${POKEMON_API_BASE}1`),
//       fetch(`${POKEMON_API_BASE}2`),
//       fetch(`${POKEMON_API_BASE}3`),
//     ];
  
//     try {
//       const results = await Promise.all(fetches);
//       console.log("All the promises are resolved");
//       console.log(results);
//     } catch (e) {
//       console.log("One of the promises is rejected");
//       console.log(e);
//     }
//   }

// ================================
// Promise.allSettled
// ================================

//   //This promise will be resolved when all the promises are settled
//   //It will return an array of objects with status and value or reason
// const GITHUB_BASE_URL = "https://api.github.com";

// async function demonstratePromiseAllSettled() {
//   let zajjaj = fetch(`${GITHUB_BASE_URL}/users/zajjaj-Khan`);
//   let nonExistent = fetch(`${GITHUB_BASE_URL}/users/nonexistentuser12345`);
//   let microsoft = fetch(`${GITHUB_BASE_URL}/users/microsoft`);
//   let resultss = await Promise.allSettled([zajjaj, microsoft,nonExistent]);

//   console.log(resultss);
//   const fullFilled = resultss.filter(r => r.status === 'fulfilled').map(r => r.value);
//   const rejected = resultss.filter(r => r.status === 'rejected').map(r => r.reason);
//   console.log("Fullfilled: ", fullFilled);
//   console.log("Rejected: ", rejected);
// }

// // Call the function to demonstrate
// demonstratePromiseAllSettled();


// ================================
//Promise Race 
// ================================

//This promise will be resolved when the first promise is resolved or rejected

//    const fetches = [
//       fetch(`${POKEMON_API_BASE}1`),
//       fetch(`${POKEMON_API_BASE}2`),
//       fetch(`${POKEMON_API_BASE}3`),
//     ];
//     Promise.race(fetches).then(winner=>{
//         console.log("First promise resolved or rejected: ", winner);
//     }).catch((e)=>{
//         console.log("Error occurred:", e);
//     })


// ================================
// Making My Own Promise
// ================================

// function wait(duration){
//     const p = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("Done waiting");
//         },duration);
//     }
// );
//     return p;
// }

// async function demo(){
// console.log('hi');
//     await wait(1000);
//     console.log('hello'
// )
// }

// wait(1000).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.error("Error:", error);
// });


// const fs = require("fs");
// fs.readFile("sample.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log("File content:", data);
//     }
// });


//Activity 
async function showNumberTrivia(number){
    const url = `http://numbersapi.com/${number}/trivia`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const trivia = await response.text();
        console.log(`Trivia for number ${number}: ${trivia}`);
    }catch(e){
        console.error("Error fetching trivia:", e);
    }

}

//Activity of Promise Race
const TriviaCalls = [
    fetch('http://numbersapi.com/1/trivia'),
    fetch('http://numbersapi.com/2/trivia'),
    fetch('http://numbersapi.com/3/trivia'),
    fetch('http://numbersapi.com/4/trivia'),

];

// Method 1: Using .then() to log the result
Promise.race(TriviaCalls)
    .then((winner) => {
        console.log("First trivia fetched!");
        return winner.text();
    })
    .then((triviaText) => {
        console.log("Result:", triviaText);
    });

// Method 2: Using async/await to log the result

