

document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdown = document.querySelector('.dropdown');

    dropdownButton.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownButton = document.querySelector('.dropdown-button1');
    const dropdown = document.querySelector('.dropdown1');

    dropdownButton.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownButton = document.querySelector('.dropdown-button2');
    const dropdown = document.querySelector('.dropdown2');

    dropdownButton.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});



document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the product ID from data-id attribute
        const productId = this.getAttribute('data-id');

        // Get the current wishlist from localStorage or initialize an empty array
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Add the product to the wishlist if it's not already there
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert("Added to wishlist!");
        } else {
            alert("This item is already in your wishlist.");
        }
    });
});






document.getElementById('backbtn').addEventListener('click', function() {
    document.querySelector('.gallery').scrollBy({
        left: -300,  // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});

document.getElementById('nextbtn').addEventListener('click', function() {
    document.querySelector('.gallery').scrollBy({
        left: 300,  // Adjust this value based on how much you want to scroll
        behavior: 'smooth'
    });
});



