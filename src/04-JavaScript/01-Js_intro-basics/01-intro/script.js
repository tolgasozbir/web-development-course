// alert("Merhaba")

console.log("Merhaba");
console.log(1234);
console.log(true);
console.log([1,2,3]);
console.error("Hata Oluştu!");
console.warn("Uyarı!");

// console.clear();


// Variables //

// var , let , const

var age;
console.log(age);

age=25;
console.log(age);

var fullname="Tolga Sözbir";
console.log(fullname);

fullname="Sözbir Tolga";
console.log(fullname);

let city="Kocaeli";
console.log(city);

const eMail="tolgasoz1@gmail.com";
console.log(eMail);

// eMail="Abcdex@hotmail.com"
// console.log(eMail);

console.log("\n\n");


// Variable Types //

//  Primitive Types

    //String
    let firstName="Tolga";

    //Number
    let age1=20;
    let money=100.5;

    //Boolean
    let isActive = false;

    //Null
    let job=null;

    //Undefined
    let car;

    console.log(typeof firstName);
    console.log(typeof age1);
    console.log(typeof money);
    console.log(typeof isActive);
    console.log(typeof job);
    console.log(typeof car);


    console.log("\n\n");
//  Reference Types - Objects

    //Arrays
    let names=["Tolga","Levent","Bülent"];

    //Object
    let adress={
        city:"Kocaeli",
        county:"Türkiye"
    }

    //Function
    var calculateAge = function(){
        return 0;
    }

    console.log(typeof names);
    console.log(typeof adress);
    console.log(typeof calculateAge);



    console.log("\n\n\n");

//      Type Conversion     //

let val;

val=Number("3.14");     // returns 3.14
val=parseFloat("3.14"); //3.14
val=parseInt("3.14");   //3

val=String(3.14);
val=(3.14).toString()

console.log(val);


console.log("\n\n\n");



//      Operators     //

const a=10;
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2- Atama Operatörleri

val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;


// 3- Karşılaştırma Operatörleri

val = a==b;
val = b==c;
val = b===c; // değer kontrolü & type
val = 5 === '5';
val = a!=b;
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// 4- Mantıksal Operatörler

   // && (And)
   // true  && true  => true
   // true  && false => false
   // false && false => false

   val=  (a>b) && (a>c) 
   val = (a>b) || (a<c)
   val = !(a>b)


   // || (Or)
 
   // true  && true  => true
   // true  && false => true
   // false && false => false

   // ! (Not)

   // !true  => false
   // !false => true

console.log(val);
console.log(typeof val);