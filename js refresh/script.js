
// "use strict";             // ya humay boht sari restriction sa bachata hain.   sai syntax ka sath code liknay ma help krta hian.

let a = 37;
console.log(a);

function hello(){
    console.log("munib");
}

hello();

//object

let obj = {
    age:20,
    name:"Munir",
    hell(number){
    console.log("i am a function", number);
    }
}
obj.hell(25);


console.log(obj);
console.log(obj.age);
console.log(obj.name);

///Event:
const h1 = document.querySelector("h1");
h1.addEventListener("click" , function fun(){
    console.log("Ahmad");
    // alert("this is msg");
    //confirm;
    confirm("hello");    //ya msg true ya falsereturn krta hain;   ok and canncel ka option hota hain.
})

d= 98;

setTimeout(() => {
    console.log("vnejfoe")
}, 2000);

