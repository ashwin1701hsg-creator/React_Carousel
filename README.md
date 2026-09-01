# Ex05 Image Carousel
## Date: 01-09-2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
## HTML
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Carousel</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">

        <h1>Image Carousel</h1>

        <div class="carousel">
            <img id="carouselImage"
                 src="https://picsum.photos/id/1015/800/400"
                 alt="Carousel Image">

            <button class="prev" onclick="previousImage()">❮</button>
            <button class="next" onclick="nextImage()">❯</button>
        </div>

        <p id="imageNumber">Image 1 of 4</p>

        <div class="dots">
            <span class="dot active" onclick="showImage(0)"></span>
            <span class="dot" onclick="showImage(1)"></span>
            <span class="dot" onclick="showImage(2)"></span>
            <span class="dot" onclick="showImage(3)"></span>
        </div>

        <footer>
            <p>Name: YOUR NAME</p>
            <p>Register Number: YOUR REGISTER NUMBER</p>
        </footer>

    </div>

    <script src="script.js"></script>

</body>
</html>
```
## CSS
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

.container {
    width: 80%;
    max-width: 900px;
    margin: 50px auto;
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px gray;
}

h1 {
    margin-bottom: 25px;
    color: #333;
}

.carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
}

.carousel img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 30px;
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.prev {
    left: 15px;
}

.next {
    right: 15px;
}

#imageNumber {
    margin: 15px;
    font-size: 18px;
}

.dots {
    margin: 15px;
}

.dot {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin: 5px;
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
}

.dot.active {
    background-color: black;
}

footer {
    margin-top: 30px;
    padding: 20px;
    background-color: #333;
    color: white;
    border-radius: 5px;
}

footer p {
    margin: 5px;
}
```
## JAVA SCRIPT
```
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
```

## OUTPUT

![alt text](<Screenshot (2).png>)
## RESULT
The program for creating Image Carousel using React is executed successfully.
