document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("productForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Product Added Successfully!");

window.location.href = "products.html";

});

}

});