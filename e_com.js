let icon=document.querySelector(".icon");
let ul=document.querySelector("ul")
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark"
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars"
    }
})

let shops=document.getElementById("shopess");
let reviews=document.getElementById("reviewss");
let blogs=document.getElementById("bolgss");
let contacts=document.getElementById("contactss");

shops.addEventListener("click",()=>{
    shops.style.color="rgba(55, 245, 245, 0.912)"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
reviews.addEventListener("click",()=>{
    reviews.style.color="rgba(55, 245, 245, 0.912)"
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
blogs.addEventListener("click",()=>{
    blogs.style.color="rgba(55, 245, 245, 0.912)"
    reviews.style.color="white"
    shops.style.color="white"
    contacts.style.color="white"
})
contacts.addEventListener("click",()=>{
    contacts.style.color="rgba(55, 245, 245, 0.912)"
    reviews.style.color="white"
    blogs.style.color="white"
    shops.style.color="white"
})

let crd=document.querySelectorAll(".crd");
let item_details=document.querySelector(".item_details")
let container=document.querySelector(".container");
let itemImg=document.getElementById("itemImg");
let buyBtn=document.getElementById("buyBtn");
let buy_text=document.querySelector(".buy_text");
crd.forEach(function(curValue){
    curValue.addEventListener("click",function(){
        item_details.style.display="flex";
        container.style.display="none";

        let imgScr=curValue.firstElementChild.src;
        itemImg.src=imgScr;

        buyBtn.addEventListener("click",function(){
        document.querySelector(".buyPageinfo").style.display="block"    
       document.querySelector(".buy_text").innerHTML=`


       <h3>Enter Details</h3>
       <input type="text"placeholder="Enter Your Name" id="name"><br>
       <input type="text"placeholder="Enter Your Address" id="address"><br>
       <input type="text"placeholder="Enter Your Mobile Number"id="num"><br>
       <h3>Payment Option</h3>
       <select name="" id="">
        <option value="Google-Pay">Google-Pay</option>
        <option value="Phone-Pay">Phone-Pay</option>
        <option value="Bhart-Pay">Bhart-Pay</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
       </select>  <br>
       `;

        let button= document.createElement("button");
        button.innerText="Submit";
        buy_text.appendChild(button)
       
        button.addEventListener("click",function(){
            let name=document.getElementById("name");
            let address=document.getElementById("address");
            let num=document.getElementById("num");

            if(name.value=="" &&address.value=="" && num.value==""){
                alert("Please Enter Detail")
            }
            else{
                document.querySelector(".buyPageinfo").style.display="none"
                alert("Your Response Recorded")
            }
        })



       let crossee=document.querySelector(".crossee");
       crossee.addEventListener("click",function(){
        document.querySelector(".buyPageinfo").style.display="none"
       })
        })
    })
})
let connecting=document.getElementById("connecting");
connecting.addEventListener("click",function(){
    let names=document.getElementById("names");
    let nums=document.getElementById("nums");
    if(names.value=="" && nums.value==""){
        alert("Fill the details")
    }
    else{
        alert("You are connecting")
    }
})