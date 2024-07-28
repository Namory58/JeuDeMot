const fs = require("fs");
const nunjucks = require("nunjucks");


const trait = function (req, res, query) {
  let marqueurs;
  let page;
  let html ='';
  const answer = query.mot;
  
  contenu_fichier = fs.readFileSync("motAleatoireGenerate.json", "utf-8");
  motgenerate = JSON.parse(contenu_fichier);

  if(motgenerate.mots.length ==answer.length){
    for (let i=0; i<answer.length; i++) {
      if (motgenerate.mots[i]==answer[i]) {
        motgenerate.motSearch[i]=answer[i];
      }
    }
  }else {
    html += '<span style="color:red;">taille du mot incorrect</span>';
  }
  contenu_fichier = JSON.stringify(motgenerate);
  fs.writeFileSync("motAleatoireGenerate.json", contenu_fichier, "utf-8");
 console.log(contenu_fichier);


 page = fs.readFileSync("modele_accueil.html", "utf-8");
 marqueurs = {};
 marqueurs.mot = motgenerate.motSearch.join('');
 marqueurs.size = motgenerate.mots.length;
 marqueurs.error = html;
 page = nunjucks.renderString(page, marqueurs);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(page);
  res.end();
};

module.exports = trait;
