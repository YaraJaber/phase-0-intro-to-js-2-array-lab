const cats = ["Milo", "Otis", "Garfield"];

cats.push("Bia");

cats.unshift("Bia");

cats.pop();

cats.shift();

function appendCat(catName) {
  const newCatsArray = [...cats];
  
  newCatsArray.push(catName);
  
  return newCatsArray;
}

const newCats1 = appendCat("Otis");

function prependCat(Bia) {
  const newCatsArray = [...cats];
  
  newCatsArray.unshift(Bia);
  
  return newCatsArray;
}

function removeLastCat() {
  const newCatsArray = cats.slice(0, -1);
  
  return newCatsArray;
}

const newCats3 = removeLastCat();

function removeFirstCat() {
    const newCatsArray = cats.slice(0, -1);
    
    return newCatsArray;
  }
  
  const newCats3 = removeFirstCat();

console.log(cats);
console.log(newCats1);
console.log(newCats2);
console.log(newCats3);