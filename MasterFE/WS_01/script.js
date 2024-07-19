// prompt('Please');
// alert('heyeyy');

// var naam = prompt('Please enter name');
// console.log(naam);

// var arr=[1,2,3,4,5];

// arr.forEach(function(val) {
//     console.log(val);
// });
// ============================================================================
// var obj={
//     name: 'John',
//     age: 25,
//     city: 'New York'
// }

// var obj2= new Object();

// obj2.name= 'John';

// ========================================================================
// var aa= document.querySelector("#parent");

// aa.addEventListener('click', function(e) {
//    if (e.target.id=="play")
//    {
//     console.log("Play song");
//    }
//    else if (e.target.id=="pause"){
//     console.log("Pause song");
//    }
// });
// ================================================================
// function devide(a,b){
//     if (b==0) {
//         throw new Error("Cannot divide by zero");
//     }
//     console.log(a/b);
//     return a/b;
// }
// try{
//     devide(12,0);
// }
// catch(e){
//     console.log(e.message);
// }
// ====================================================================
// const event = new Event("chachannel");

// var ss=document.querySelector("button");

// ss.addEventListener("chachannel", function() {
//    alert("hua event");
// });

// ss.dispatchEvent(event);

// var eles = document.querySelectorAll("input[type=text]");
// var sub = document.querySelector("form");
// var txt= document.querySelector("h1");

// sub.addEventListener("submit", function(e) {
//     e.preventDefault();

//     for(var i=0; i<eles.length; i++){
//         if(eles[i].value.trim() === ""){
//            txt.textContent ="some fields missing";
//            txt.style.color = "red";
//            break;
//         }
//     }
   
// });
// ======================================================
// var add=document.querySelector("#add");
// var remove=document.querySelector("#remove");
// var input=document.querySelector("input");
// var ul=document.querySelector("ul");
// var li;

// add.addEventListener("click", function() {
//     if (input.value.trim() === ""){}
//     else{
//         li=document.createElement("li");
//         li.textContent=input.value;
//         ul.appendChild(li);
//         input.value = "";
//     }
    
// }
// )
// remove.addEventListener("click", function() {
//    ul.removeChild(li);  
// })
// ==========================================================================


// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");

// start.addEventListener("click", function() {
//     var counter=0;
//     int = setInterval(function() {
//         h3.textContent = counter;
//         counter++;
       
//     }, 1000)
// });
// stop.addEventListener("click", function() {
//     clearInterval(int);
// })

// ==============================================================================
// Map & Filters 

const arrr=[1,2,3,4,5,6];

// const arrr2=arrr.map(elem=>elem*3);

// console.log(arrr2);

const arr1=arrr.filter(elem => elem%2==0);

console.log(arr1);

const arr=[
    {name:"harsh",gender:"male"},
    {name:"hardfdsh",gender:"female"},
    {name:"hwarsh",gender:"male"},
    {name:"harttysh",gender:"male"}
]

const abc=function arr(arrr) {};
const abb=()=>{};
const arr11= arr.map(elem=>({...elem,name:elem.gender=="female"?elem.name="harshita":elem.name}));
console.log(arr11);

const abra=arr.map(elem=>({...elem,welcomemsg:`Hello..!,${elem.name}`}))

console.log(abra);