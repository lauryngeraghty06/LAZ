document.addEventListener("DOMContentLoaded", () => {

    // Animate Progress Bars
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
      const widthMatch = bar.style.width.match(/(\d+)%/);
      if(widthMatch){
        const width = widthMatch[1];
        bar.style.width = "0%";
        setTimeout(() => { bar.style.width = width + "%"; }, 100);
      }
    });
  
    // Like Button ❤️
    const likeButtons = document.querySelectorAll(".btn-like");
    likeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        btn.style.transform = "scale(1.3)";
        setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
      });
    });
  
    // Watched Button 👁️
    const watchedButtons = document.querySelectorAll(".btn-watched");
    watchedButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".watchlist-card");
        const progressBar = card.querySelector(".progress-bar");
        btn.classList.toggle("active");
        const isTV = card.dataset.type === "tv";
  
        let targetWidth, color;
        if(btn.classList.contains("active")){
          targetWidth = isTV ? "70%" : "100%";
          color = isTV ? "#E0B0FF" : "#FF4C4C";
        } else {
          targetWidth = "0%";
          color = "#3D1F3C";
        }
  
        progressBar.style.transition = "width 1s ease-in-out, background-color 0.5s ease";
        progressBar.style.width = targetWidth;
        progressBar.style.backgroundColor = color;
      });
    });
  
    // Remove Button 🗑️
    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".watchlist-card");
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => card.remove(), 400);
      });
    });
  
    // ================= Watchlist Filters =================
    const filterButtons = document.querySelectorAll(".watchlist-filters button");
    const cards = document.querySelectorAll(".watchlist-card");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const type = button.dataset.type;
        cards.forEach(card => {
          if(type === "all" || card.dataset.type === type){
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  
    // ================= Share Watchlist =================
    const shareButton = document.getElementById("shareWatchlist");
    shareButton.addEventListener("click", () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        alert("Watchlist URL copied to clipboard!");
      });
    });
  
  });
  