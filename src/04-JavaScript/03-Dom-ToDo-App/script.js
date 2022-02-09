// UI variables 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// Load items
loadItems();

// Call event listeners
eventListeners();

function eventListeners(){
    // Submit event
    form.addEventListener('submit',addNewItem);

    // Delete an item
    taskList.addEventListener('click',deleteItem);

    // Delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

//
function loadItems() {

    items = getItemsFromLS();

    items.forEach(function(item){
        createItem(item);
    });
}

// Get Item From Local Storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// Set item to local storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

// Delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);   
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

//Create item
function createItem(text) {
    // create li
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);
}

// Add new item
function addNewItem(e){
    if(input.value ===''){
        alert('add new item');
    }

    // Create item
    createItem(input.value);

    // Save to LS
    setItemToLS(input.value);

    // clear input
    input.value='';

    e.preventDefault();

}

// Delete an item
function deleteItem(e) {
    if (e.target.className==='fas fa-times') {
        e.target.parentElement.parentElement.remove();

        // delete item from LS
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }

    e.preventDefault();
}

// Delete all items
function deleteAllItems(e) {
    
    // taskList.innerHTML="";

    if (confirm("Are you sure?")) {
        
        while(taskList.firstChild){
            taskList.firstChild.remove();
        }

        // delete items from LS
        localStorage.clear();
    }

    e.preventDefault();
}