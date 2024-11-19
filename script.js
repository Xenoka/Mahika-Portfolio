function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Function to generate flowers falling from the top
// Function to generate flowers falling from the top
function createFallingFlowers() {
    const container = document.getElementById("flowers-container");

    // Number of flowers to create
    const numberOfFlowers = 30;

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Randomize position, size, and animation duration
        flower.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        flower.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Random falling speed
        flower.style.animationDelay = `${Math.random() * 5}s`;  // Random delay before starting to fall
        flower.style.transform = `scale(${Math.random() * 2 + 2})`;  // Random flower size (0.5 to 1.0)

        container.appendChild(flower);
    }
    // Remove flowers after 7 seconds
    setTimeout(() => {
        container.innerHTML = ''; // Clears the container and removes all flowers
    }, 7000); // 7 seconds
}

// Call the function to create flowers when the page loads
window.onload = createFallingFlowers;



