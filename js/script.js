//ini js

  // Function to prompt the user for their name and update the welcome message
  function updateWelcomeMessage() {
    // Prompt the user for their name
    let userName = prompt("Please enter your name:");

    // Check if the user entered a name
    if (userName) {
        // Update the welcome message with the user's name
        document.getElementById("welcomeMessage").innerText = `Halo ${userName}, Welcome to Hanifah Website!`;
    } else {
        // If no name was entered, display a default message
        document.getElementById("welcomeMessage").innerText = `Halo User, Welcome to Hanifah Website!`;
    }
}

// Call the function when the page loads
window.onload = updateWelcomeMessage;

// Call the function when the page loads
window.onload = updateWelcomeMessage;


//banner autoslide
let slideIndex = 0;
const slides = document.getElementsByClassName("banner-item");

function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    // Show the specified slide
    slides[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}




// Fungsi untuk validasi formulir dan menampilkan hasil input
function validateForm() {
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let genderElement = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Check if all fields are filled
    if (!name || !birthdate || !genderElement || !message) {
        errorMessage.textContent = "Please fill out all fields before submitting.";
        return false; // Prevent form submission
    }

    let gender = genderElement.value;

    // Display form data in the result container
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultBirthdate").textContent = birthdate;
    document.getElementById("resultGender").textContent = gender;
    document.getElementById("resultMessage").textContent = message;

    // Clear form fields after displaying data
    document.getElementById("name").value = "";
    document.getElementById("birthdate").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("message").value = "";

    return false; // Prevent form submission for demo purposes
}
