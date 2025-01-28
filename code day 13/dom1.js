// let x =document.createElement("h1");
// x.innerText="Dynamic creation of html element from JS"
// // x.id="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image=document.createElement("img");
// image.src="burger.png";
// console.log(image);
// document.body.appendChild(image);


// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// localStorage.clear();

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class", "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(topEle);

// let image=document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg";
// image.width="300";
// image.height="200";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// // console.log(bottomEle);

// let h1=document.createElement("h1");
// h1.innerText="Heading";

// let btn=document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username=document.getElementById("uName");
let password=document.getElementById("uPass");
let check =document.getElementById("check");
let show =document.getElementById("show");



check.addEventListener("click",event=>{
    // console.log(event);
    // console.log(event.target.checked);
    if (event.target.checked==true){
        password.setAttribute("type","text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type","password");
        show.innerText="show password";
    }
})

let gen=document.getElementsByName("gender");
form.addEventListener("submit",event=>{
    event.preventDefault();
    let un =username.value;
    let up=password.value;
    let ele=[];
    // console.log(ele);
    for(let i=0;i<=gen.length-1;i++){
        // console.log(gen[i].checked);
        if(gen[i].checked==true){
            // console.log("true", gen[i].value);
            ele +=gen[i].value;
        }
    }
    let userDetails={
        un,up,gender
    };
    console.log(userDetails);
})

