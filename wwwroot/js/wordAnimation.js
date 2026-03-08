window.startWordAnimation = () => {

    const word = document.getElementById("word-of-day");

    if (!word) return;

    word.classList.remove("animate__fadeInUp");

    // restart animation
    void word.offsetWidth;

    word.classList.add("animate__animated");
    word.classList.add("animate__fadeInUp");
};