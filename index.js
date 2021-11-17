const numbers = [1,2,4,6,22,34];
const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name: 'Tesla',
        model: 'Model S',
        year: 2020
    }
}
console.log(numbers);
console.log(person.foods);


const somethingElse = require('./myModule');

console.log(somethingElse); 

somethingElse.hello(); 
console.log(somethingElse.hello()); 

const moduleTwo = require('./moduleTwo');
console.log(moduleTwo.helloWorld());

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});

// const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Hello, World!');
//    res.end();
// })
// .listen(8000);

const faker = require('faker');

let randName = faker.name.findName();
console.log(randName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

const axios = require('axios');

axios.get('https://api.github.com/users/romebell')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err)
})