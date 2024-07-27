const mots =  require('./data.json');
const rl = require('readline-sync');
const utile = require('./utiles');

const indexAleatoire =Math.floor(Math.random() *mots.mots.length); // chercher l'index du mot
const motAleatoire = mots.mots[indexAleatoire];
//const motAleatoire = "école"

console.log("Le mot est : " +motAleatoire);
let result = utile.spacemot(motAleatoire);

console.log(result.join(' '));

while(motAleatoire !== result.join('')){
    let reponse = rl.question("Donne un mot au quelle tu pense : ");
    utile.searchLettre(reponse,motAleatoire,result);
    console.log(result.join(' '));
}
console.log(result.join(' '));
