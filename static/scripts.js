// /static/scripts.js
// interativity code

// Global Declarations

document.addEventListener( 'DOMContentLoaded', (event) => {
    data_transfer()
    fetch('/read/1')
    .then(Response=>Response.json)
    .then(data=>{
        alert(data)
    })

})

// Main Code
function reject() {
    data_transfer()
}

function accept() {
    data_transfer()
}

// Helper Functions