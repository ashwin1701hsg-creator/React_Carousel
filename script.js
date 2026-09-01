const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1025/800/400"
];

let currentIndex = 0;

const carouselImage = document.getElementById("carouselImage");
const imageNumber = document.getElementById("imageNumber");
const dots = document.querySelectorAll(".dot");

// Next Image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Previous Image
function previousImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    updateImage();
}

// Display selected image
function showImage(index) {
    currentIndex = index;
    updateImage();
}

// Update image and dots
function updateImage() {
    carouselImage.src = images[currentIndex];

    imageNumber.textContent =
        "Image " + (currentIndex + 1) + " of " + images.length;

    dots.forEach((dot, index) => {
        dot.classList.remove("active");

        if (index === currentIndex) {
            dot.classList.add("active");
        }
    });
}

// Auto-Rotation every 3 seconds
setInterval(nextImage, 3000);