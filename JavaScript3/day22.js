// //3)manipulation of content in element
// console.dir(document); // #document
// console.dir(document.all); // HTMLAllCollection(38)
// console.dir(document.all[8].innerText); // Spider Man
// document.all[8].innerText = "Peter Parker"; // herer value of h1 changes to Peter Parker

//5.selecting elements by id
// document.getElementById("mainImg");
// let imgObj = document.getElementById("mainImg");
// imgObj; // <img src="./assets/Spider-Man.png" id="mainImg" class="abc  xyz">
// console.log(imgObj); // 
// console.dir(imgObj); // img#mainImg.abc.xyz
//imgObj.src
//imgObj.tagName  //'IMG'
// imgObj.id // 'mainImg'


//document.getElementById('description'); //<p id="description">…</p>
//console.dir(document.getElementById("description"));


//6. Selecting elements by class name
//getElementByClassName;
//Returns the elements as an HTML collection or empty collection (if not found)

// document.getElementsByClassName("oldImg");//HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]
// document.getElementsByClassName("oldImg")[0];//first image url we get
// document.getElementsByClassName("oldImg")[1];//second image url wew get

// //pgm:
// let smallImages = document.getElementsByClassName('oldImg');
// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i]);
// }

// //Selecting elements by tag name
// // Return the Elements as an HTML Collection or empty collection (if not found)

// document.getElementsByTagName('p');//HTMLCollection(2) [p, p#description, description: p#description]
// document.getElementsByTagName('p')[1].innerText = 'abc';//here if we do like this the whole value of  paragraph changes to abc

//Query selectors
// Allow us to use any CSS selectors
// document.querySelector('p'); //selects first p  element 
// document.querySelector('#myid'); // selects first element with id = myId
// document.querySelector('.myClass'); // selects first element with class = myClass
// document.querySelectorAll('p'); // selects all p elements 

// console.dir(document.querySelector("h1"));

//9.Setting content in Objects
//using properties and methods
// innerText:shows the visible text contained in a node
//textContent:shows all the full content
//innerHTML:shows the full markup

// let para = document.querySelector('p');
// console.dir(para); //p
// para.innerHTML;
// para.innerText;
// para.textContent;

//11.Manipulating Attributes
//obj.getAttribute(attr)
//obj.setAttribute(attr,val)

// //12.Manipulating Style.//in dom manipulation everything becomes in camel case
// let img = document.querySelector('img');
// console.dir(img);//img#mainImg.abc.xyz
// img.style;
// let heading = document.querySelector('h1');
// heading.style;
// heading.style.color ='purple';//'purple' here heading color becomes purple
// heading.style.backgroundColor = 'yellow'; // here background color of the heading tag will becomes yellow

// let links = document.querySelectorAll(".box a");

// for(let i=0; i < links.length; i++){
//     links[i].style.color = "green"; // inline only visible
// }


// //12.Manipulating style. using classList
// // Obj.classList

// // classList.add() // to add new classes
// // classList.remove() // to remove classes
// // classList.contains() // to check if class exists
// // classList.toggle() // to toggle between add and remove

// // let heading = document.querySelector('h1');
// // heading.classList.add('abc'); // here it will add class abc to the heading element
// // heading.classList;// here it will display all the classes of the heading element
// // heading.classList.add('green');//here it will access the styling of green class from css
// // heading.classList.add('green');//it will give false because it doesn not have that class

// //toggle it will work like compliment or switch.
// // let box = document.querySelector('.box');
//  //box.classList.add("yellowBg")//here background color will become yellow for box class

//13.Navigation 
//parseElement
//children
//previousElementSibling/ nextElementSibling
// let h4 = document.querySelector('h4');
// h4.parentElement;//h4.parentElement;
// let box = document.querySelector('.box');
// box.children;//HTMLCollection(2) [h4, ul]
// box.childElementCount;//2
// let ul = document.querySelector('ul');
// ul.parentElement;
// ul.childElementCount;//3
// ul.children;//HTMLCollection(3) [li,li,li]
// ul.children[0];
// ul.children[1];
// ul.children[2];
// ul.children[1].previousElementSibling;
// ul.children[1].previousElementSibling;

// let img = document.querySelector('img');
// img.previousElementSibling;
// img.previousElementSibling.style;
// img.previousElementSibling.style.color = "green";

//14.Adding elements on page
// document.createElement('p')
// appendChild(element)
// append(element) //add element to last
// prepend(element) // add element to first
//insertAdjacent(where, element)

// document.createElement('p');// it will insert new paragraph to the document element
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, I am a new p"; // 'Hi, I am a new p'
// let body = document.querySelector('body');
// body.appendChild(newP);//<p>Hi, I am a new p</p> .here it will add a paragraph tag to the last line
// let box = document.querySelector('.box');
// box.appendChild(newP);//<p>Hi,I am a new p</p>.here it will insert this paragraph to the last line of the box class.

// //we can inser t button also
// let btn = document.createElement('button');
// console.dir(btn);
// btn.innerText = 'click me';
// box.appendChild(btn);//<button>click me </button> here it will add a button element to the last line
// box.prepend(newP);


// //insertAdjacent(where, element).
// let btn = document.createElement('button');
// btn.innerHTML = "NEW BUTTON!!!";
// let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn); // button element will be added before begin of the paragraph
// p.insertAdjacentElement('afterbegin',btn);//button will add start of the paragraph inside 
// p.insertAdjacentElement('beforeend',btn);// inside paragraph but last
// p.insertAdjacentElement('afterend',btn);//after the completion of the paragraph

//15.Removing elements from a page
//removeChild(element)
//remove(element)
// let body = document.querySelector('body');
// body.removeChild(btn);
// p.insertAdjacentElement('afterend',btn);
// btn.remove();
// body.remove();



// //practice Questions
// //1.add a <p> with red text that says "Hey i'm red!"
// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').prepend(para1);
// para1.classList.add("red");

// //question2
// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm a blue h3!";
// document.querySelector('body').prepend(h3);
// h3.classList.add("blue");

// //question3
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add('box');
// document.querySelector('body').prepend(div);


// //Questions
// //1.Q
// let button = document.createElement('button');
// let input = document.createElement('input');
// button.innerText = 'click me';

// document.querySelector('body').append(input);
// document.querySelector('body').append(button);

// //2.Q
// button.setAttribute('id','btn');
// input.setAttribute('placeholder','username');

// //3.Q
// let btn = document.querySelector('#btn');
// btn.classList.add('btnStyle');

// //4.Q
// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM Practice</u>";
// document.querySelector('body').append(h1);

// //5.Q
// let para3 = document.createElement('para3');
// para3.innerHTML = "College <b>Ab</b> Practice";
// document.querySelector('body').append(para3);