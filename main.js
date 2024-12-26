var a = 10;

{
    var b = 20;
    let m = 20;
    const com=60;
    console.log(m);
    
}

let m = 30;
console.log(b);
console.log(m);


var fun = function(){
    console.log(5-3);
    
}
var fun = 33;
console.log(fun);


const foo = function(){
    console.log(5-2);
    
}

console.log(foo);

frostms();
function frostms() {
    console.log('hj');
    
    
}


const fron = function(){
    console.log('kill');
    
}

fron();
const arrow = (a = 'nothing', b = 0) =>{
    console.log('arrow',a,b);
    
}
arrow();
arrow(10.20);

let mas = [1,2,3,4];
console.log([...mas,30,40,50]);

let obj = { name:'Kari', age: 18};
obj = {...obj, lern:'OshSU'}
console.log(obj);


let masob = [{name:'Hipi'},{name: 'jkkkk'}];
masob = [...masob,{name:'polo'}];
console.log(masob);


const fool = (b,c,...a) => {
    console.log('Massiv',a,b,c);
    
}

fool(1,2,3,4,5);



let mas1 = [1, 2, 3, 4];

for(item in mas1){
    console.log(item);
    console.log(mas[item]);
    
    
}

let [num1, num2, num3, num4] = mas1;
console.log(num1);

let obj1 = {name: 'Guli', age: 12, surname:'Nuraliev'};

let {name:ame1, age: age1, surname:surname1} = obj1;
console.log(ame1);


let man = 'Hello';
let numb = 20;
console.log(man + 'World' + numb);
console.log(`${man} World ${numb}`);






















