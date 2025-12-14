// progress.js
document.addEventListener("DOMContentLoaded", () => {

    /* ================= Login Modal ================= */
    const authOverlay = document.getElementById("authOverlay");
    const closeAuthBtn = document.getElementById("closeAuth");
    const loginButtons = document.querySelectorAll(".login-btn");
  
    loginButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        authOverlay.style.display = "flex";
      });
    });
  
    closeAuthBtn.addEventListener("click", () => {
      authOverlay.style.display = "none";
    });
  
    /* ================= Progress Bars ================= */
    const progressCards = document.querySelectorAll(".progress-card");
  
    progressCards.forEach(card => {
      const slider = card.querySelector(".progress-slider");
      const progressBar = card.querySelector(".progress-bar");
      const percentageText = card.querySelector(".progress-percentage");
  
      if(slider) {
        slider.addEventListener("input", () => {
          const value = slider.value;
          progressBar.style.width = value + "%";
          if(percentageText) percentageText.textContent = value + "% completed";
        });
      }
    });
  
    /* ================= Send Review ================= */
    const reviewForms = document.querySelectorAll(".progress-card");
  
    reviewForms.forEach(card => {
      const textarea = card.querySelector("textarea");
      const sendBtn = card.querySelector(".btn-send");
      const reviewList = card.querySelector(".recent-reviews ul");
  
      if(sendBtn && textarea && reviewList) {
        sendBtn.addEventListener("click", () => {
          const text = textarea.value.trim();
          if(text.length > 0) {
            const li = document.createElement("li");
            li.textContent = text;
            reviewList.appendChild(li);
            textarea.value = "";
          }
        });
      }
    });
  
    /* ================= Watched Counters ================= */
    const movieCounter = document.getElementById("moviesWatched");
    const tvCounter = document.getElementById("tvWatched");
  
    function updateCounters() {
      let movies = 0;
      let tv = 0;
  
      progressCards.forEach(card => {
        const slider = card.querySelector(".progress-slider");
        const typeText = card.querySelector("p");
        if(slider && typeText) {
          const isWatched = slider.value == 100;
          if(isWatched) {
            if(typeText.textContent.includes("Movie")) movies++;
            if(typeText.textContent.includes("TV")) tv++;
          }
        }
      });
  
      if(movieCounter) movieCounter.textContent = movies;
      if(tvCounter) tvCounter.textContent = tv;
    }
  
    // Initialize counters
    updateCounters();
  
    // Update counters whenever slider changes
    progressCards.forEach(card => {
      const slider = card.querySelector(".progress-slider");
      if(slider) {
        slider.addEventListener("input", updateCounters);
      }
    });
  
  });
  