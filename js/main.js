function sortProductsLowHigh() {

    const grid = document.querySelector(".products-grid");
    const products = Array.from(document.querySelectorAll(".product-card"));

    products.sort((a, b) => {
        return a.dataset.price - b.dataset.price;
    });

    products.forEach(product => grid.appendChild(product));
}


function sortProductsHighLow() {

    const grid = document.querySelector(".products-grid");
    const products = Array.from(document.querySelectorAll(".product-card"));

    products.sort((a, b) => {
        return b.dataset.price - a.dataset.price;
    });

    products.forEach(product => grid.appendChild(product));
}

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if(name === "" || email === ""){
            document.getElementById("formMessage").textContent =
            "Please fill in all required fields.";
            return;
        }

        document.getElementById("formMessage").textContent =
        "Thank you! Your appointment request has been received.";
    });
}

function rsvpEvent(){
        alert("Your RSVP has been received!");
        }

/* HOMEPAGE SLIDESHOW */

const slides = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
    ];
    
    let slideIndex = 0;
    
    function changeSlide() {
    
    let slide = document.getElementById("slideshow");
    
    if (slide === null) return;
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
    slideIndex = 0;
    }
    
    slide.src = slides[slideIndex];
    
    }
    
    setInterval(changeSlide, 3000);