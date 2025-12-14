console.log("JS linked!");

const stars = document.querySelectorAll(".stars i");
let selectedRating = 0;

stars.forEach((star, index) => {

  // Hover fill
  star.addEventListener("mouseover", () => {
    fillStars(index);
  });

  // Restore selection
  star.addEventListener("mouseleave", () => {
    fillStars(selectedRating - 1);
  });

  // Click to lock
  star.addEventListener("click", () => {
    selectedRating = index + 1;
    fillStars(index);
  });
});

function fillStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("fa-solid", "filled");
      star.classList.remove("fa-regular");
    } else {
      star.classList.add("fa-regular");
      star.classList.remove("fa-solid", "filled");
    }
  });
}

// SUBMIT
submitBtn.addEventListener("click", () => {
  if (selectedRating === -1) {
    alert("Please select a rating ⭐");
    return;
  }
  popup.style.display = "flex";
});

// CLOSE POPUP
function closePop() {
  popup.style.display = "none";
}
