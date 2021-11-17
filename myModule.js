function helloClass() {
    return 'Good morning. Please put sonic emoji in Slack.'
}

function goodbyeClass() {
    return 'Good bye. Please put sonic emoji in Slack.'
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

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

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age
        this.introduction = function () {
            return 'Hi';
        }
    }
}

module.exports = {
    hello: helloClass,
    goodbye: goodbyeClass,
    add: addNumbers,
    human: Human,
    person
}