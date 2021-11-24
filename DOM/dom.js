//show properties and objects
console.dir(document);

//get the domain name
console.log(document.domain);

//get the URL
console.log(document.URL);

//get the title and change the title
console.log(document.title);
document.title = "Changed Title";
console.log(document.title);

//get the type of the document
console.log(document.doctype);

//get the body of the document
console.log(document.body)

//get the head of the document
console.log(document.head);

//get everything that is present in the dom
//returns a HTML collection
//all is deprecated
console.log(document.all);
console.log(document.all[13]);
//get the text content
console.log(document.all[13].textContent);

//in the same way we can extract forms, links and other elements

//getting element by ID

console.log(document.getElementById("item-lister"));
//can also be assigned to variable

//.inneText considers the styling while .textContent does not
//see the span element in h1 tag
console.log(document.getElementById('item-lister').innerText);
console.log(document.getElementById('item-lister').textContent);

//to put the html tag inside a DOM element
// document.getElementById("item-lister").innerHTML = "<h3>Inner HTML</h3>"

//changing style in DOM
var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px black";

//getting elements by class name

var items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].innerText = "Changing text of this LI element";
//items[1].style.backgroundColor = "red";

//iterating through the HTML collection to change all the elements background color to gray
for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.style.backgroundColor = "#f4f4f4";
};

// [...items].forEach(element => {
//     element.style.backgroundColor = "00ff00";
// });

console.log([...items]);

//getting elements by tagname
//return HTML collection of all the DOM element with the provided tag
console.log(document.getElementsByTagName('li'));

//Query Selector
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 5px red";

//grabbing input
var input = document.querySelector('input');
input.value = "Please write something";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

//selecting children in list
var firstItem = document.querySelector(".list-group-item");
firstItem.style.color="green";

//last child

var lastChild = document.querySelector(".list-group-item:last-child");
lastChild.style.color = "red";

//nth child
var nthchild = document.querySelector(".list-group-item:nth-child(2)");
nthchild.style.color = "crimson";


//query selector all

var title = document.querySelectorAll('.title');
console.log(title);

title[0].innerText = "Changed title";

//we can use all CSS syntax in query selector
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (let index = 0; index < odd.length; index++) {
    odd[index].style.backgroundColor = "grey";
    even[index].style.backgroundColor = "#ccc";
}


//getting the parent of an element
//parent of ul
var items = document.querySelector("#items");
console.log(items.parentNode);
items.parentNode.style.backgroundColor = "#f4f4f4";
console.log(items.parentNode.parentNode.parentNode.parentNode.parentNode);

//parentElement
//parentElement and parentNode are same for the most of the part
var items = document.querySelector("#items");
console.log(items.parentElement);
items.parentElement.style.backgroundColor = "#f4f4f4";
console.log(items.parentNode.parentNode.parentNode.parentNode.parentNode);

//previousSibling
//nextSibling

//creating new DOM element from JS
var newDiv = document.createElement('div');
//adding ID to the above new element
newDiv.id = "hello1";


//adding class to the above new element
newDiv.className = "hello";

//adding attributes
newDiv.setAttribute("title", "new element");

//adding content in newDiv
//creating text node
var text = document.createTextNode('Hello World');
newDiv.appendChild(text);

//inserting new element into dom
var container = document.querySelector("header .container")
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

console.log(newDiv);

//Events

/**
  this is an old way of event handling

  function buttonClick(){

    console.log("Button Clicked");

}
*/

//Using event listener
var button = document.querySelector('#btn-id').addEventListener('click', (e) => {
    console.log("Button Clicked");

    //printing output on the DOM

    var newDiv = document.querySelector('#new-div');
    newDiv.innerHTML = `<h3>${e.target.id}</h3>`;
    // newDiv.innerText = 'hello';

    //getting the position of the cursor
    console.log(`X = ${e.clientX}`);
    console.log(`Y = ${e.clientY}`);

    //client is with respect to browser
    //offset is with respect to actual element

    //to know which key was pressed when button was clicked
    //use event.altKey, event.ctrlKey, event.shiftKey
});

//event types
var button2 = document.querySelector('#btn-id1');
button2.addEventListener('click', (e) => {
    button2.innerText = 'EVENT TYPE : '+e.type;
})

button2.addEventListener('dblclick', (e) => {
    button2.innerText = 'EVENT TYPE : '+e.type;
})

button2.addEventListener('mouseup', (e) => {
    button2.innerText = 'EVENT TYPE : '+e.type;
})

button2.addEventListener('mousedown', (e) => {
    button2.innerText = 'EVENT TYPE : '+e.type;
})


//tracking mouse
var box = document.querySelector('#box');
box.addEventListener('mouseenter', (e) => {
    box.style.backgroundColor = 'crimson';
})

box.addEventListener('mouseleave', (e) => {
    box.style.backgroundColor = 'grey';
    box.innerText = '';
})

/**
  In the same way we can use the mouseover and mouseout

  Difference is mouseenter and mouseleave will be only for the parent element
  BUt mouseover and mouseout will be for any nested elemtn too.
 */

//getting the coordinates on moving mouse

box.addEventListener('mousemove', (e) => {

    box.innerText = `MouseX = ${e.offsetX} MouseY = ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, ${e.offsetX - e.offsetY})`;
})


//listening to the input events
var input = document.querySelector('.input');
var form = document.querySelector('form');

//detecting input from the keyboard
//other types blur, focus, keyup, keypress
input.addEventListener('keydown', (e) => {
    //console.log(e.target.value);

    box.innerText = e.target.value;
})

//same way other events can also be handled


