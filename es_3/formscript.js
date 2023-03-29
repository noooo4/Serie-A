(function() {
    // your page initialization code here
    // the DOM will be available here
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const cc = document.getElementById("cc").value

   
    
})();

function myUser() { 
    const x = document.getElementById("username"); 
    x.value = x.value.toUpperCase();
    console.log(x.value);
    if(x.value.length > 6){
        alert('massimo 6 caratteri')
    }
};

function myPass() {
    const x = document.getElementById("password");
    x.value = (x.value);
    console.log(x.value);
    if(x.value.length > 6) {
        alert('massimo 6 caratteri')
    }
};

function myEmail() {
    const x = document.getElementById("email");
    x.value = (x.value);
    console.log(x.value);  
    if (x.value.includes("@")) {
        alert('email valido') 
    } else {
        alert('email non valido')
    }
};

function myCard() { 
    const x = document.getElementById("cc"); 
    x.value = (x.value);
    console.log(x.value);
    if (x.value.length > 16){
        alert('invalida carta di credito, massimo 16 caratteri, SOLO NUMERI')
    }
};

function myCcv() { 
    const x = document.getElementById("cvv"); 
    x.value = (x.value);
    console.log(x.value);
    if (x.value.length > 3){
        alert('invalida CVV ha solo 3 caratteri, SOLO NUMERI')
    }
};


// (() => {
//     'use strict'
    
//     const forms = document.querySelectorAll('.needs-validation')
    
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })
// })()

