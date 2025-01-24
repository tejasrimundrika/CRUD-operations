// let element =document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// // div.innerText="<h1>Header</h1>"
// div.innerHTML = "<h1>Header</h1>"
// console.log(div);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow";
// let x= [...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
    // console.log(element);
//     element.style.backgroundColor="teal";
// })


// let ele =document.getElementsByTagName("div");
// console.log(ele);


// let ele =document.getElementsByName("username");
// // console.log(ele);

// [...ele].map(element=>{
//     element.style.backgroundColor="aqua"
// })

// let ele = document.querySelector("#demo");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })


// let btn = document.getElementById("btn");
// // btn.addEventListener("events",callbackfn);
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     document.body.style.backgroundColor="blue";
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("dbclick",()=>{
//     console.log("button clicked");
//     document.body.style.backgroundColor="blue";
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "blue";
// });
// btn.addEventListener("mouseleave", () => {
//     document.body.style.backgroundColor = "white";
// });



// let inp = document.querySelector("#inp");

// inp.addEventListener("keydown", () => {
//     console.log("key pressed down");
// });

// inp.addEventListener("keyup", () => {
//     console.log("key up");
// });


//!ASSIGNMENT   
// Function to display the clicked color name
function displayColor(color) {
    const colorDisplay = document.querySelector("#color-display");
    colorDisplay.textContent = `You clicked on: ${color}`;
}

// Add event listeners for each color text
document.querySelector("#red").addEventListener("click", () => displayColor("Red"));
document.querySelector("#yellow").addEventListener("click", () => displayColor("Yellow"));
document.querySelector("#blue").addEventListener("click", () => displayColor("Blue"));
document.querySelector("#teal").addEventListener("click", () => displayColor("Teal"));
document.querySelector("#tomato").addEventListener("click", () => displayColor("Tomato"));









