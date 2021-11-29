function contarVocals(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = ("Institut Vidreres");

const resultat = contarVocals(string);

console.log(resultat);
