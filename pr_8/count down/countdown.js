/* ******************************** count down ***************************************** */
function updateCountdown() {
    const now = new Date();
    const birthday = new Date("September 15, 2025 00:00:00");
  
    const diff = birthday - now;
  
    if (diff <= 0) {
      document.querySelector('.countdown').innerHTML = "<h2>🎂 Happy Birthday! 🎂</h2>";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  
  