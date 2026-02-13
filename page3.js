$(document).ready(function() {

    var envelope = $("#envelope");
    var btnOpen = $("#open");
    var btnReset = $("#reset");
    var music = document.getElementById("loveSong");

    // Open the envelope and play music
function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    createHearts();

    // Play music on iOS-friendly way
    music.volume = 0.7;
    
    // Attempt to play immediately on user click
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Music playing");
            })
            .catch((error) => {
                console.log("iOS autoplay blocked, tap to play:", error);
                // Optionally, show a small "Tap to play music" button
            });
    }
}


    // Generate floating hearts
    function createHearts() {
        let heartsContainer = $(".hearts");
        heartsContainer.empty();

        for (let i = 0; i < 8; i++) {
            let heart = $("<div class='heart'></div>");

            heart.css({
                left: Math.random() * 80 + 10 + "%",
                animationDelay: Math.random() * 1 + "s"
            });

            heartsContainer.append(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    btnOpen.click(function() {
        openEnvelope();
    });

    btnReset.click(function() {
        closeEnvelope();
    });

});

// Cursor hearts effect
document.addEventListener("mousemove", function(e) {

    let heart = document.createElement("div");
    heart.classList.add("cursor-heart");

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

function goBack() {
    window.history.back();
}

/* ===============================
   SLOW FALLING FLOWERS EFFECT
================================= */

function createFlower() {

    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Flower types (you can change emojis if you want)
    const flowers = ["🌸", "🌷", "🌺", "🌼", "🪻"];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    // Random horizontal position
    flower.style.left = Math.random() * 100 + "vw";

    // Random size
    flower.style.fontSize = (20 + Math.random() * 20) + "px";

    // Slow falling duration (8 to 15 seconds)
    const duration = 8 + Math.random() * 7;
    flower.style.animationDuration = duration + "s";

    document.body.appendChild(flower);

    // Remove after animation ends
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}



