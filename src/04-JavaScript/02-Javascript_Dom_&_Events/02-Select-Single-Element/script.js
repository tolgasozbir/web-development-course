// Selecting Elements

// *** Single Elements

// document.getElementById()  
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// val = val.id;
// val = val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// val.style.display='none';

// document.getElementById('header').innerText='my ToDo App';

// document.getElementById('header').innerText='<b>my ToDo App</b>';

// document.getElementById('header').innerHTML='<b>my ToDo App</b>';        // Yazı içindeki html etiketlerini yorumlar
//console.log(val);

// *** document.querySelector()

console.log(document.querySelector('#header'));         //# id ye göre seçim
console.log(document.querySelector('.card-header'));    //. class a göre seçim
console.log(document.querySelector('div'));             //etiket ismine göre seçim

document.querySelector('li').style.color='red';             //tekli seçim olduğundan ilk li etiketini etkiler
document.querySelector('li:last-child').style.color='blue'; // Son eleman
document.querySelector('li:nth-child(2)').style.color='yellow'; // index numarasına göre
document.querySelector('li:nth-child(3)').textContent='task item';  //text değiştirme
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary';    //var olan classları siler, yeni ekler

document.querySelector('li').classList.add('active');   //var olan classlara, yeni class ekler



