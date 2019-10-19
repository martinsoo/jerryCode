console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.all);

console.log(document.all[12]);
document.all[12].textContent = "Hi I'm Christopher and I love coding";

console.log(document.images);

document.images[0].src = "./images/back.png"

document.title = "Wuni Christopher";

let about = document.getElementById('projects');
about.textContent = "Contact Us";
about.style.border = "solid 2px #000000"

let thirdProj = document.getElementById('proj-3');
thirdProj.innerHTML = "Best Project";

let right = document.getElementsByClassName('right');
console.log(left);

let rightq = document.querySelector('.right');
console.log(rightq);
let me = document.querySelector('#me');
console.log(me);
me.style.color = "purple";

//Create div
let myDiv = document.createElement('div');
myDiv.className = 'myDiv';
myDiv.id = 'myDiv1';
let myDivText = document.createTextNode('This is really awesome guys');
myDiv.appendChild(myDivText);
console.log(myDiv);

