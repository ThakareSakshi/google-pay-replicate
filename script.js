// start--------------->

let payment_section=document.querySelector(".payment");
let pay_btn=document.querySelector(".pay_btn")
pay_btn.addEventListener("click",()=>{
   payment_section.innerHTML=`
   <header>
        <input type="text" class="mobile_number" placeholder="Enter 10 digit mobile number">

        
        

    </header>
    <main class="">
        
    </main>
    <footer class="page_2_footer">
        <button class="proceed_btn">Procced</button>
    </footer>`
})

// second page---------------->