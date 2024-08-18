// var generateName = require("sillyname");
import generateName from "sillyName";


var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
// import superheroes from "superheroes";

// const name = superheroes.random();
// console.log(`I am ${name}!`);
import { faker } from '@faker-js/faker';
const fakerName = faker.name.findName();
console.log(`Another name is ${fakerName}.`);
