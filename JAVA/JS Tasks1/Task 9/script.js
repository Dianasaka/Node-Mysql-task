/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
   
const budget = prompt("What is bugdet");

  if (budget > 100_000_000) {
    
    console.log("Was expensive")
  } else {
    console.log("Not was expensive");
  } 

  console.log(
    budget >= 100_000_000 ? 'Was expensive' : 'Not was expensive'
  )

  console.log(budget)
