// /static/scripts.js
// interativity code

// Global Declarations
let row_num = 1;


// Main Code
function reject() {

}

function accept() {

}

function data_transfer(){
  fetch(`/read/${row_num}`)
  .then(Response => Response.json())
  .then(data => {
    const obj = JSON.parse(data);
    const ingredient_list = document.getElementById("ingredients-list");
    ingredient_list.innerHTML = "";
    document.getElementById("product-name").innerHTML = obj.product_name;
    document.getElementById("product-type").innerHTML = "Product Type: " + obj.product_type;
    document.getElementById("url").innerHTML = "Learn More: " + obj.product_url;
    document.getElementById("price").innerHTML = "Price: " + obj.price;
    var size = obj.clean_ingreds.length;
    for(let i = 0; i < size; i++){
      const listItem = document.createElement(li);
      listItem.innerHTML = obj.clean_ingred[i];
      ingredient_list.appendChild(listItem);
    }
    row_num++;
  })
}

// Helper Functions