// Safe typing effect
const text = ["Business Analyst", "Marketing Enthusiast"];
let i = 0, j = 0;
let current = "";
let deleting = false;

function type() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (!deleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = text[i].substring(0, j--);
    }

    el.textContent = current;

    if (j === text[i].length) deleting = true;
    if (j === 0 && deleting) {
        deleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, 120);
}
type();

// Menu toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if(menu){
    menu.onclick = () => nav.classList.toggle("active");
}

// Theme toggle
const toggle = document.getElementById("theme-toggle");

if(toggle){
    toggle.onclick = () => {
        document.body.classList.toggle("light");
    }
}

// Form
function sendMessage(e){
    e.preventDefault();
    const msg = document.getElementById("msg");
    if(msg) msg.textContent = "Message sent!";
}
