

script.js
Step 3

Paste this code into the editor.

/* ===================================
   PayNakki Official Website
   JavaScript Version 1.0
=================================== */

console.log("Welcome to PayNakki!");

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".button");

    if(button){

        button.addEventListener("click", function(e){

            e.preventDefault();

            alert(
                "Thank you for visiting PayNakki!\n\nOur platform is currently under development.\n\nStay tuned for exciting updates."
            );

        });

    }

});
