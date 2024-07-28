const fs = require("fs");
const nunjucks = require("nunjucks");
const data = require("./data.json");
const utile = require("./utiles");

const trait = function (req, res, query) {
  let marqueurs;
  let page;

  let indexAleatoire = Math.floor(Math.random() * data.mots.length); // chercher l'index du mot
  let motAleatoire = data.mots[indexAleatoire];

  //lecture de mon ficher Json
  contenu_fichier = fs.readFileSync("motAleatoireGenerate.json", "utf-8");
  motgenerate = JSON.parse(contenu_fichier);
  
  //écrire dans mon ficher Json
  motgenerate.mots = motAleatoire;
  motgenerate.motSearch = utile.spacemot(motAleatoire);
  contenu_fichier = JSON.stringify(motgenerate);
  fs.writeFileSync("motAleatoireGenerate.json", contenu_fichier, "utf-8");
 console.log(contenu_fichier);
  
  // LIRE ET RENDRE LE FICHIER HTML AVEC NUNJUCKS
  page = fs.readFileSync("modele_accueil.html", "utf-8");
  marqueurs = {};
  marqueurs.mot = motgenerate.motSearch.join('');
  marqueurs.size = motAleatoire.length;
  page = nunjucks.renderString(page, marqueurs);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(page);
  res.end();
};

module.exports = trait;
