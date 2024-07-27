const http = require("http");
const url = require("url");
const req_commencer = require("./req_commencer.js");
const req_jouer = require("./req_jouer.js");

const traite_requete = function (req, res) {
  let requete;
  let pathname;
  let query;

  console.log("URL reçue : " + req.url);
  requete = url.parse(req.url, true);
  pathname = requete.pathname;
  query = requete.query;

  try {
    switch (pathname) {
      case '/':
      case '/req_commencer':
        req_commencer(req, res, query);
        break;
      case '/req_jouer':
        req_jouer(req, res, query);
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found\n');
        res.end();
    }
  } catch (e) {
    console.error("Erreur : " + e.stack);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('500 Internal Server Error\n');
    res.end();
  }
};

const port = 8000; // Par défaut, le port est 8000
// Pour récupérer le numéro du port depuis la ligne de commande. Exemple : node index.js 5000
// const port = process.argv[2] || 8000;

const mon_serveur = http.createServer(traite_requete);
mon_serveur.listen(port, () => {
  console.log("Serveur en écoute sur port " + port);
});
