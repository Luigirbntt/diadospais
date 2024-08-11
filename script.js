document.getElementById("loveButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    createHearts();
});

function createHearts() {
    const heartContainer = document.getElementById("hearts");
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
