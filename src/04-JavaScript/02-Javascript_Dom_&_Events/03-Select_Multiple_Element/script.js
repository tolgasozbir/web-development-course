// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

// class name                             //class'ına göre seçim
// *** document.getElementsByClassName()

let val;

//val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];   //0. indexteki eleman

// val = document.getElementsByClassName('list-group-item')[2];

// val = val[2];  //2. indexteki eleman

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';


// * tüm elemanları dolaşmak için * \\

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }



// *** document.getElementsByTagName()       //Etikete göre seçim

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');   //task-list classının altındaki a elemanlarına erişim


// ** document.querySelectorAll()   

// val = document.querySelectorAll('li'); 

// val.forEach(function(item,index){
//     item.textContent= `${index} - hello`;
// });

val = document.querySelectorAll('li:nth-child(even)');   //odd tekil even çift

val.forEach(function(item){
   item.style.background='#ccc';
});

console.log(val);




