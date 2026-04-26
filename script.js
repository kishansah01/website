const text = "Business Analyst";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

document.getElementById("menu").onclick = () => {
    document.getElementById("nav").classList.toggle("active");
};

document.getElementById("theme-toggle").onclick = () => {
    if (document.body.style.background === "white") {
        document.body.style.background = "#0f172a";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
};

function sendMessage(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent!";
}
