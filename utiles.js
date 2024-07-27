 function spacemot(l=String){
    let mot = [];
    for(let o = 0;o<l.length;o++){
        mot.push('-');
    };
    return mot;
};
 function searchLettre(answer = string,mot =string,result =[]){
    for(let y =0;y<answer.length;y++){
        if(mot[y] === answer[y]){
           result[y] = answer[y];
        }
    }
};
module.exports = {
    spacemot,
    searchLettre
};

