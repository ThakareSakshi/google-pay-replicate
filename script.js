// --------------fetching all pages------------------------>

let mainPage=document.querySelector(".main_page")
let numberpage=document.querySelector(".number_page")
let AmountPage=document.querySelector(".amount_page")
let PinPage=document.querySelector(".pin_page")
let finalpaymentPage=document.querySelector(".successful")
let errorPage=document.querySelector(".error_page")
let loader=document.querySelector(".loader")
let loader2=document.querySelector(".loader2")
let loader3=document.querySelector(".loader3")

// -----------fetching all btns----------------->
const pay_btn=document.querySelector(".pay_btn");
const proceed_btn=document.querySelector(".proceed_btn")
const pay_amount_btn=document.querySelector("#pay_amount_btn")
const final_payment_btn=document.querySelector("#final_payment")




// --------------new payment---------------->
pay_btn.addEventListener("click",()=>{
  loader.style.display="block";
   setTimeout(()=>{
    loader.style.display="none";
    mainPage.style.display="none";
    numberpage.style.display="block";
   },3000);

})

// -----------------proceed payment-------------->
proceed_btn.addEventListener("click",()=>{
   
    let validate_mobile=new Promise((resolve,reject)=>{
        let mobile_number=document.querySelector(".mobile_number");
        if(mobile_number.value.length<10 || mobile_number.value.length>10 ){
            loader2.style.display="block";
            reject("enter valid mobile number");
        }
        else{
            loader2.style.display="block";
            resolve(mobile_number.value);
        }
    })
    
    setTimeout(()=>{
        validate_mobile.then((mobile_number)=>{
            console.log("pressed")
            numberpage.style.display="none";
            document.querySelector(".paying_to_number").innerText="Paying to +91-"+mobile_number
            AmountPage.style.display="block";
            loader2.style.display="none";
           
            
        }).catch((msg)=>{
            loader2.style.display="none";
            document.querySelector(".number_page main").innerHTML=`<p>${msg}</p>`;
        })

    },2000);
    
})

//----------------add amount---->

let Pay_amount=document.querySelector(".Pay_amount");

Pay_amount.addEventListener("input",()=>{
    pay_amount_btn.innerText="pay "+"₹ "+Pay_amount.value
})

pay_amount_btn.addEventListener("click",()=>{
    let validate_payment=new Promise((resolve,reject)=>{
        if(Pay_amount.value >=10000){
            reject("max transfer limit is 9,999 rs. only");
        }else{
            resolve(Pay_amount.value)
        }
    })

    validate_payment.then((amount)=>{
        document.querySelector("#money").innerText= " ₹ "+amount;
      PinPage.style.display="block";
      AmountPage.style.display="none";
      document.querySelector(".pin_page .paying_to_number").innerText=document.querySelector(".paying_to_number").innerText;


    })
})

// ------------------validate pin----------------->

final_payment_btn.addEventListener("click",()=>{
    let validate_pin=new Promise((resolve,reject)=>{
        let pin=document.getElementById("pin");
        if(pin.value.length<6){
            reject("wrong pin");
           }
           else{
            resolve(Pay_amount.value);
           }
    })

    validate_pin.then((amount)=>{
        setTimeout(()=>{
            console.log(amount)
            document.querySelector("#money").innerText= Pay_amount.value;
            PinPage.style.display="none";
            finalpaymentPage.style.display="block";
        },3000);
    }).catch((msg)=>{
        console.log(msg);
    })
})

