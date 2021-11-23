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

