const students = [
    {id: 22, name:"Shamim Ashraf"},
    {id: 33, name: "Ishra Khan"},
    {id: 44, name: "Rayan Mahmud"},
    {id: 55, name: "Sristy Rahman"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);