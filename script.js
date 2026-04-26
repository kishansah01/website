// Typing effect
const text = ["Business Analyst", "Marketing Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type(){
    const el = document.getElementById("typing");
    if(!el) return;

    if(!deleting && j <= text[i].length){
        current = text[i].substring(0,j++);
    } else if(deleting && j >= 0){
        current = text[i].substring(0,j--);
    }

    el.textContent = current;

    if(j === text[i].length) deleting = true;
    if(j === 0 && deleting){
        deleting = false;
        i = (i+1) % text.length;
    }

    setTimeout(type,120);
}
type();

// Menu toggle
document.getElementById("menu").onclick = () => {
    document.getElementById("nav").classList.toggle("active");
};

// Form
function sendMessage(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent!";
}
