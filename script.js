// AOS
AOS.init();

// Typing Effect
const text = ["Business Analyst", "Marketing Enthusiast", "Future Entrepreneur"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    if (i < text.length) {
        if (!deleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (deleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.getElementById("typing").textContent = current;

        if (j === text[i].length) deleting = true;
        if (j === 0 && deleting) {
            deleting = false;
            i++;
        }
    } else i = 0;

    setTimeout(type, 100);
}
type();

// Theme Toggle
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Mobile Menu
document.getElementById("menu").onclick = () => {
    document.getElementById("nav").classList.toggle("active");
};

// Fake Form
function sendMessage(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent!";
}
