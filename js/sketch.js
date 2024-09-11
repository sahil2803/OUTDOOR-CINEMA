// Arrays to store static and fading stars
let staticStars = [];
let fadingStars = [];

// Star class to handle fading behavior
class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.brightness = random(50, 255); // Initial brightness
        this.fadeSpeed = random(0.5, 1.5); // Speed of fading
        this.alpha = 0; // Transparency (0 to 255)
    }

    update() {
        // Update the alpha for fading in and out
        this.alpha += this.fadeSpeed;
        if (this.alpha >= 255 || this.alpha <= 0) {
            this.fadeSpeed *= -1; // Reverse the fading direction
        }
    }

    display() {
        stroke(255, this.alpha); // Set stroke color with current alpha
        strokeWeight(1);
        point(this.x, this.y);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Set background color to black
    randomSeed(millis()); // Seed the random number generator based on current time

    // Generate static stars
    for (let i = 0; i < 50; i++) { // Adjust the number of static stars as needed
        let x = random(width);
        let y = random(height);
        staticStars.push(createVector(x, y));
    }

    // Create initial fading stars
    for (let i = 0; i < 100; i++) { // Adjust the number of fading stars as needed
        let x = random(width);
        let y = random(height);
        fadingStars.push(new Star(x, y));
    }
}

function draw() {
    // Draw background that fades stars slowly
    background(0, 0, 0, 2); // Set background color with lower opacity for slower fading

    // Update and draw fading stars
    for (let star of fadingStars) {
        star.update();
        star.display();
    }

    // Draw static stars separately
    stroke(255); // Set stroke color to white for static stars
    strokeWeight(1); // Set fixed stroke weight for static stars
    for (let i = 0; i < staticStars.length; i++) {
        let star = staticStars[i];
        point(star.x, star.y);
    }
}
