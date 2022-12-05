const container = document.querySelector('#container'); 

const content = document.createElement('div'); 
content.classList.add('content'); 
content.textContent = 'This is the glorious text-content!'; 

container.appendChild(content);

//? Creating the general 
// ? Creating the div
// const div = document.createElement('div'); 

/*
<p> Hey I'm red</p> //color:red;  
<h3>I'm a blue h3!</h3> //color:blue; 
<div> //background-color: pink; border-color: black; 
    <h1> I'm in a div </h1> 
    <p>Me too!</p> 
</div>
*/

//? p append
const p = document.createElement('p');
p.textContent = "Hey I'm red!"; 
p.style.color = 'red'; 
// p.style.cssText = 'color: black'; 
// p.setAttribute('style', 'color: blue;'); 
container.appendChild(p); 


//? h1 append 
const h3 = document.createElement('h3'); 
h3.textContent = 'I \'m a blue h3';
h3.style.cssText = 'color: blue'; 
container.appendChild(h3);


//? Smaller div
const div_smaller  = document.createElement('div'); 
div_smaller.classList.add('container_2'); 
const h1 = document.createElement('h1');
const div_p = document.createElement('p'); 
div_smaller.setAttribute("style", "border:20px solid blue; background-color: pink;")
div_smaller.backgroundColor = 'red';

div_p.textContent = "ME TOO!";
h1.textContent = "I'm in a div"; 
div_smaller.append(div_p, h1); 
container.appendChild(div_smaller); 



//? Test h3
// const div_r = document.createElement('h3'); 
// // const div_style = document.querySelectorAll('h3').style; 
// // div_style.backgroundColor = 'blue'; 
// div_r.textContent = 'Test h3'; 
// document.body.appendChild(div_r); 


// const h2 = document.createElement('h2');
// h2.textContent = 'I wanna test h2'; 
// document.body.append(h2); 

// p.textContent = 'Hey I\'m red!'; 
// document.appendChild(p); 
// p.innerHTML = 'Hey I\'m red!'; 


//? Create button
const btn = document.createElement('button');
// btn.setAttribute('style', 'margin-top: 5px');
btn.style.cssText ='margin-top: 20px'; 
btn.setAttribute('id','btn'); 
btn.textContent = "Ok"; 


const container_2 = document.querySelector('div'); 
const h3_new = document.createElement('h3');
h3_new.textContent = "Do something crazy"; 
container_2.appendChild(h3_new); 

container_2.appendChild(btn); 


const button_id = document.querySelector('#button');
button_id.onClick = () => alert('Hello world!'); 
container_2.appendChild(btn); 




























