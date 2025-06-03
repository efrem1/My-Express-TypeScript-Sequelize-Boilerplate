const people = [
  {name:"Alice",age:25},
  {name:"Banana",age:25},
  {name:"Barbado",age:30},
  {name:"Barbado",age:30},
];

const grouped = Object.groupBy(people, (person) => person.age);

console.log(grouped);
