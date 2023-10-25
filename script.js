// start--------------->

let payment_section = document.querySelector(".payment");

// second page---------------->


// let mobile_number = document.querySelector(".mobile_number").value;
// let proceed_btn = document.querySelector(".preceed_btn");
// proceed_btn.addEventListener("click", () => {
//   let validate_number = Check_mobile_number(mobile_number.value);
//   validate_number
//     .then((mobile_number_value) => {
//       Selection.innerHTML = `<section class="payment">
//      <div class="user_container">
//        <div class="user_profile">S</div>

//        <p>Paying to +91-${mobile_number_value}</p>
//        <div class="amount">
//          <span> RS. </span>
//          <input type="text" class="Pay_amount" placeholder="0" />
//        </div>
//        <div><input type="text" class="note" placeholder="Add a Note" />
//        </div>
//      </div>

//      <footer class="third_page_footer">
//        <button id="pay_amount_btn">pay 20 Rs.</button>
//      </footer>
//    </section> -->
//     <!-- <section class="payment">
//      <div class="user_container">
//        <div class="user_profile">S</div>

//        <p>Paying to number</p>
       
//      </div>
//      <main class="Authentication">
//        Amount Rs.
//       <span> Enter 6 digit pin </span>
//       <input type="password" id="pin" maxlength="6" placeholder=" ......">

       
//      </main>

//      <footer class="third_page_footer">
//        <button id="pay_amount_btn">pay</button>
//      </footer>
//    </section>`;
//     })
//     .catch((msg) => {
//       let main = document.querySelector(".payment main");
//       main.innerText = msg;
//     });
// });

let Check_mobile_number = (Mobile_number) => {
  return new Promise((resolve, rejected) => {
    if (Mobile_number.length < 10 || Mobile_number.length > 10) {
      rejected("number is not valid");
    } else {
      resolve(Mobile_number);
    }
  });
};

let move_to_add_number_page = () => {
  return new Promise((resolve, reject) => {
    let pay_btn = document.querySelector(".pay_btn");
    pay_btn.addEventListener("click", () => {
      setTimeout(() => {
        payment_section.innerHTML = `
       <header>
             <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
                alt=""
                class="gpay_logo"
              />
            </div>
            <input type="text" class="mobile_number" placeholder="Enter 10 digit mobile number">
        </header>
        <main class="">
            
        </main>
        <footer class="page_2_footer">
            <button class="proceed_btn">Procced</button>
        </footer>`;
        
        resolve();
        
      }, 2000);
    });
  });
};





let start= move_to_add_number_page();
start.then((mobile_number)=>{
    let mobile_number1=document.querySelector(".mobile_number");
    let preceed_btn=document.querySelector(".proceed_btn");
        preceed_btn.addEventListener("click",()=>{
            Check_mobile_number(mobile_number1.value);
        }).then()
    

    
}

)