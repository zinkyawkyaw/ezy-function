const ezy = require('./dist/ezyFunction');


var date = ezy.formatDate('2019-10-10' , "DD/MM/YYYY");
console.log(date);
//10/10/2019


var comma = ezy.comma(19900);
console.log(comma);
//19,900


var round = ezy.round(125.3652 , 2);
console.log(round);
//125.37


var str2number = ezy.str2number('12,1234');
console.log(str2number);
//121234


const test =  {name: 'ajay', age: 21};
var objLength = ezy.objectLength(test);
console.log(objLength);
//2


array = [
    {id: 1 , name : 'a'},
    {id: 2 , name : 'b'},
]
var index = ezy.findIndex(array , ['id' , 1])
console.log(index);
//0


var isEmail = ezy.isMail('aj@mail.com');
console.log(isEmail);
//true