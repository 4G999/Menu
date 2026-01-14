openContact.onclick = () => contactPopup.style.display = "flex";
closeContact.onclick = () => contactPopup.style.display = "none";
contactPopup.onclick = e => {
    if (e.target === contactPopup) contactPopup.style.display = "none";
};

openRules.onclick = () => rulesPopup.style.display = "flex";
closeRules.onclick = () => rulesPopup.style.display = "none";
rulesPopup.onclick = e => {
    if (e.target === rulesPopup) rulesPopup.style.display = "none";
};



const background = document.querySelector(".background");

function createBlink() {
  const blink = document.createElement("div");
  blink.classList.add("blink");

  // Posisi random
  blink.style.left = Math.random() * 100 + "vw";

  // Ukuran random
  const size = Math.random() * 6 + 2;
  blink.style.width = size + "px";
  blink.style.height = size + "px";

  // Durasi jatuh random
  const duration = Math.random() * 8 + 5;
  blink.style.animationDuration = `${duration}s, 1.5s`;

  background.appendChild(blink);

  // Hapus setelah selesai
  setTimeout(() => {
    blink.remove();
  }, duration * 1000);
}

// Buat terus menerus
setInterval(createBlink, 100);


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
