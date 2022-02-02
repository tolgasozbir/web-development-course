//Date Object

// let dt = Date.now();

// console.log(dt);


let d = new Date();

//new Date(!year, !month, day?, hours?, minutes?, seconds?, milliseconds?)


// ISO Date	"2015-03-25" (The International Standard)
const ISO_1 = new Date("2015-03-25");
const ISO_2 = new Date("2015-03");
const ISO_3 = new Date("2015");
// Short Date	"03/25/2015"
const short_dt = new Date("03/25/2015");
// Long Date	"Mar 25 2015" or "25 Mar 2015"
const long_dt = new Date("Mar 25 2015");

    //Get Methods

console.log(d.getFullYear());   //yıl
console.log(d.getMonth());      //ay    0-11
console.log(d.getDate());       //gün   1-31
console.log(d.getHours());      //  0-23
console.log(d.getMinutes());    //  0-59
console.log(d.getMilliseconds());    //  0-999
console.log(d.getDay());            //  haftanın günü 0-6
console.log(typeof d);

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            //0-pazar...6-cumartesi

const dt = new Date();
let day = days[dt.getDay()];

console.log(day);

    //Set Methods

// d.setDate(15);               //Set the day as a number (1-31)
// d.setFullYear("2025");	    //Set the year (optionally month and day)
// d.setHours(26);	            //Set the hour (0-23)
// d.setMilliseconds();	        //Set the milliseconds (0-999)
// d.setMinutes();	            //Set the minutes (0-59)
// d.setMonth();	            //Set the month (0-11)
// d.setSeconds();	            //Set the seconds (0-59)
console.log(d);


console.log("\n\n");


// Numbers Math //

let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);    // toplam gösterilcek basamak sayısı
// val = num.toFixed(2);        // virgülden sonra 2 basamak

val = Math.PI;              
val = Math.round(2.4);  //En yakın sayıya yuvarlar
val = Math.round(2.7);  
val = Math.ceil(2.4);   //Yukarıya yuvarlar
val = Math.ceil(2.6);
val = Math.floor(2.4);  //Aşşağıya yuvarlar
val = Math.floor(2.7);
val = Math.sqrt(64);    //karekökü
val = Math.pow(2,4);    //2 üzeri 4
val = Math.abs(-100);   //mutlak değer daima pozitif değer verir
val = Math.min(1,2,3,2,4,9);
val = Math.max(4,5,6,4,98,7);
val = Math.floor(Math.random()*100+1);  //1-100

console.log(val);
console.log(typeof val);


console.log("\n\n");

// Strings

const firstName = 'Tolga';
const lastName = "Sözbir";
let hobbies = 'sinema spor kitap yazılım';
const age=26;

let value;

// string concatenation

value = firstName +" "+ lastName;
value = 'Sadık';
value +=' Turan';

value = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' Kocaeli\'de yaşıyorum.';

//string concat
value = firstName.concat(' ',lastName);

// string uppercase - lowercase
value = value.toUpperCase();
value = value.toLowerCase();

// string replace
value = '  '+value.replace('Tolga','Levent')+'     ';

// trim
value = value.trim();

// substring 
// val = val.substring(3,8);

// slice
// val = val.slice(6); 

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

value =hobbies.split(' ')

console.log(value);
console.log(typeof value);