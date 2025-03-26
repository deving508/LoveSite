/*const photos = Array.from(document.querySelectorAll(`.photo`));
let currentIndex = 0;

function ShowPhotos () {
    photos.forEach(photo => {
        photo.classList.remove(`show`)
    });
    photos[currentIndex].classList.add(`show`)
    currentIndex = (currentIndex + 1) % photos.length;
}
setInterval (ShowPhotos, 7000)

ShowPhotos();
*/
function OpenForm () {
    window.open(`https://docs.google.com/forms/d/1R3bw1JiZD_gIFO9rgDZKfgWQ-ANsKru_dTY8Yq3aLQE/edit?usp=drivesdk`);
}

window.onload = function() {
    let testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonials.length === 0) {
        console.error("No testimonials found! Check your HTML.");
        return; // Exit if no testimonials are found
    }

    let index = 0;

    function showNextTestimonial() {
        testimonials[index].classList.remove('active'); // Remove active from current
        index = (index + 1) % testimonials.length; // Move to next testimonial
        testimonials[index].classList.add('active'); // Activate next one
    }

    // Start the cycle
    setInterval(showNextTestimonial, 5000);

    // Ensure the first one is visible initially
    testimonials[0].classList.add('active');
};
function copyInstagram() {
    const instagramHandle = "@omp.rose";  // Replace with his actual username
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = instagramHandle;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";

    // Hide confirmation after 3 seconds
    setTimeout(() => {
        document.getElementById("confirmation").style.display = "none";
    }, 3000);
}

