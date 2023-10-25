// --------------fetching all pages------------------------>

let mainPage=document.querySelector(".main_page")
let numberpage=document.querySelector(".number_page")
let AmountPage=document.querySelector(".amount_page")
let PinPage=document.querySelector(".Pin_page")
let finalpaymentPage=document.querySelector(".final_payment")
let errorPage=document.querySelector(".error_page")

// -----------fetching all btns----------------->
const pay_btn=document.querySelector(".pay_btn");
const proceed_btn=document.querySelector(".proceed_btn")
const pay_amount_btn=document.querySelector("#pay_amount_btn")




// --------------new payment---------------->
pay_btn.addEventListener("click",()=>{
    mainPage.style.display="none";
   numberpage.style.display="block";

})

// -----------------proceed payment-------------->
proceed_btn.addEventListener("click",()=>{
    let validate_mobile=new Promise((resolve,reject)=>{
        let mobile_number=document.querySelector(".mobile_number");
        if(mobile_number.value.length<10 || mobile_number.value.length>10 ){
            reject("enter valid mobile number");
        }
        else{
            resolve(mobile_number.value);
        }
    })

    setTimeout(()=>{
        validate_mobile.then((mobile_number)=>{
            console.log("pressed")
            numberpage.style.display="none";
            document.querySelector(".paying_to_number").innerText="Paying to +91-"+mobile_number
            AmountPage.style.display="block";
           
            
        }).catch((msg)=>{
            document.querySelector(".number_page main").innerText=msg;
        })

    },2000);
    
})

//----------------add amount---->
