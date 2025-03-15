// script.js

let countdown = 10;
const countdownEl = document.getElementById("countdown");
const redirectBtn = document.getElementById("redirectBtn");
const popup = document.getElementById("popup");

let interval = setInterval(() => {
  countdown--;
  countdownEl.innerText = countdown;

  if (countdown === 5) {
    popup.style.display = "block";
  }

  if (countdown === 0) {
    clearInterval(interval);
    redirectBtn.disabled = false;
    redirectBtn.innerText = "Link Generated – Click to Watch";
  }
}, 1000);

redirectBtn.addEventListener("click", () => {
  window.location.href = "https://www.1024terabox.com/play/video?path=%2FTaala%20Chaabi%20-%20Riti%20Riwaj%20Complete%281%29%281%29%281%29.mkv&t=-1"; 
});

function closePopup() {
  popup.style.display = "none";
}

