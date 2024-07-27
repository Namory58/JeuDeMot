const fs = require("fs");
const nunjucks = require("nunjucks");

const trait = function (req, res, query) {
  let marqueurs;
  let page;
  let answer =query.mot ;
  console.log(answer);
 
  // LIRE ET RENDRE LE FICHIER HTML AVEC NUNJUCKS
  //page = fs.readFileSync("modele_accueil.html", "utf-8");
  //marqueurs = {};
  //marqueurs.mot = answer;
  //marqueurs.size = motAleatoire.length;
  //page = nunjucks.renderString(page, marqueurs);
/*
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(page);
  res.end();*/
};

module.exports = trait;
