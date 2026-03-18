console.log("===== Lab JavaScript : Lab 4 =====");

function letterFinder(word, match) {
    if(typeof(word) !== "string"){
       console.log("Erreur: word doit être une chaîne de caractères.");
       return;
    }
    if(typeof(match) !== "string" || match.length < 0){
console.log("Erreur: match doit être une seule lettre (1 caractère).");
return;
    }

  for (let i = 0; i < word.length; i++) {
   //console.log("Current Letter is:", word[i]);
   if(word[i] === match){
    console.log("fount the ",match," at ",i);
   }
   else{
     console.log('---No match found at', i);
   }
  }
}

letterFinder(333,"t");