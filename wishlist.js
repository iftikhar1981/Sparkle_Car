"use strict";

console.log("js");
 
var products = [];

//set the click for each button;
window.onload = function setup() {
    console.log ("setup");
    var  buttons= document.querySelectorAll(".but");
    for(var i=0; i<buttons.length; i++ ){
        buttons[i].onclick= function(e) {
            additem(e);
        };
    }
  //Function setup adds event handlers to the Add to list Buttons while querySelectorAll gets the collection of elements for each button

};
 
   
function additem(e) {
  //add only an item to the wish list one time;
        var productId = e.target.getAttribute("id");
        console.log(products);
    if (!products.includes(productId)) {
        console.log(productId);
        var product= document.getElementById("item"+ productId);
        var aside= document.getElementById("sidebar");
        var article= document.createElement("article");
        article.innerHTML=product.innerHTML;
        products.push(productId);
        //add remove button;
        var button= document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","remove");
        button.onclick= function(e) {      
            e.target.parentNode.remove();
             for(var i=0;i<products.length;i++) {
                if  (products[i]==productId)
                products.splice(i,1);
            }

          };

            article.appendChild(button);
            aside.appendChild(article);
         }
         
   //Additem(e) function adds items to the wish list
//When a product is added to the list, there is a button called "Remove" that shows up to remove the product from the wish list. The remove button is used to expand the assignment
//I created the "Remove" button by creating button.setAttribute to identify the remove button. e.target.parentNode is used to return an element with a specific value

         
}

