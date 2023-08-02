// concat() --- "ohiriga qoshib beradi"
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);


// indexOf() --- "Array dan kiritilingan (soz , son va hk ) nechanchi orindaligiga aniqlab beradi"
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));



// find() --- "kiritilingan(son va soz )dan eng birinchi kattasi bolgan arrayni chiqarib beradi"
const number = [5, 12, 8, 130, 44];

const found = number.find(element => element > 10);

console.log(found);



// forEach() --- "Array dagi malumotni chiqarib beradi"
const array = ['a', 'b', 'c'];

array.forEach(element => console.log(element));



// includes() --- "Arrayning ichida kiritilingan soz bolsa TRUE qiymatini qaytaradi ELSE  FALSE ni qaytaradi "
const raqam = [1, 2, 3];

console.log(raqam.includes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));



// push() == "qowib beradi "
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);



// unshift() --- "oldiga qoshib beradi "
const son = [1, 2, 3];
console.log(son.unshift(4, 5));
console.log(son);
 
pop() --- "olib tashlaydi ohiridan" 
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();

console.log(plants);



// shift() --- "boshidana olib tashlaydi "
const array4 = [1, 2, 3];

const firstElement = array4.shift();
console.log(array4);
console.log(firstElement);


// sort() --- "birlik xona boyicha osish tartibida joylashtirib beradi "
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const array5 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array5);

// slice() --- "qirqib oladi "
const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animal.slice(2));

console.log(animal.slice(2, 4));

console.log(animal.slice(1, 5));

console.log(animal.slice(-2));

console.log(animal.slice(2, -1));

console.log(animal.slice());