document.addEventListener("DOMContentLoaded", () => {
  
    // ================= ADD TO WATCHLIST =================
    const watchlistButtons = document.querySelectorAll(".btn-watchlist");
  
    watchlistButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".anticipated-card");
        const title = card.querySelector("h2").textContent;
        const type = card.dataset.type;
        const genre = card.dataset.genre;
        const release = card.querySelector(".release-date").textContent;
        const img = card.querySelector("img").src;
  
        const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  
        // Prevent duplicates
        if(!watchlist.some(item => item.title === title)) {
          watchlist.push({title, type, genre, release, img});
          localStorage.setItem("watchlist", JSON.stringify(watchlist));
          btn.textContent = "Added ✓";
          btn.disabled = true;
        }
      });
    });
  
    // ================= FILTER BY GENRE =================
    const genreFilter = document.getElementById("genreFilter");
    const cards = document.querySelectorAll(".anticipated-card");
  
    genreFilter.addEventListener("change", () => {
      const genre = genreFilter.value;
      cards.forEach(card => {
        if(genre === "All" || card.dataset.genre === genre) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  