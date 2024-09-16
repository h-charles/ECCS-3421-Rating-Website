// /static/scripts.js

// Global Declarations
let row_num = 0;
let total_rows = 1000;
let shuffled_rows = [];


document.addEventListener("DOMContentLoaded", (event) => {
    shuffled_rows = shuffleArray(Array.from({ length: total_rows }, (_, i) => i + 1))

    data_transfer()
})

// Main Code
function reject() {
    data_transfer()
}

function accept() {
    const list = document.getElementById('like-list')
    const item = document.createElement('li')
    const link = document.createElement('a')

    link.innerText = document.getElementById('product-name').innerText;
    link.href = document.getElementById('url').innerText;

    link.target = '_blank';

    item.appendChild(link)
    list.appendChild(item)
    data_transfer()
}

// Helper Functions
function data_transfer() {
    fetch(`/read/${shuffled_rows[row_num]}`)
        .then(Response => Response.json())
        .then(data => {
            const obj = data
            const ingredient_list = document.getElementById("ingredients-list");
            ingredient_list.innerHTML = "";
            document.getElementById("product-name").innerHTML = obj.product_name;
            document.getElementById("product-type").innerHTML = "Product Type: " + obj.product_type;
            document.getElementById("url").innerHTML = obj.product_url;
            document.getElementById("price").innerHTML = "Price: " + obj.price;
            var size = obj.clean_ingreds.length;
            for (let i = 0; i < size; i++) {
                const listItem = document.createElement('li');
                listItem.innerHTML = obj.clean_ingreds[i];
                ingredient_list.appendChild(listItem);
            }
            row_num++;
        })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}