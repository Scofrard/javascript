const tauxInteret = 0.03
let solde = 1000
let depot = 200
let retrait = 150
let nouveauDepot = 500
let nouveauRetrait = 800

solde2 = solde + depot
console.log("Vous avez déposé " + depot + " euros. Nouveau solde : " + solde2 + "euros.")

if (solde2 > retrait) {
    console.log("Vous avez retiré " + retrait + " euros. Nouveau solde : " + (solde2 - retrait) + "euros.")
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.")
}

solde3 = solde2 - retrait
//console.log(solde3)
interet = solde3 * tauxInteret
//console.log(interet)
solde4 = solde3 + interet
//console.log(solde4)
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde4 + " euros.")


solde5 = solde4 + nouveauDepot
console.log("Vous avez déposé " + nouveauDepot + " euros. Nouveau solde : " + solde5 + "euros.")


if (solde5 > nouveauRetrait) {
    console.log("Vous avez retiré " + nouveauRetrait + " euros. Nouveau solde : " + (solde5 - nouveauRetrait) + "euros.")
} else {
    console.log("Solde insuffisant pour effectuer ce retrait.")
}

solde6 = solde5 - nouveauRetrait
//console.log(solde6)
interet2 = solde6 * tauxInteret
//console.log(interet2)
solde7 = solde6 + interet2
//console.log(solde7)
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde7 + " euros.")