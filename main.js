//Рекурсия 
let countri = 0
function addCount(){
 return function(){
    return ++countri
 }
}

const countAdd = addCount()
countAdd()
countAdd()
countAdd()
console.log(countAdd())


