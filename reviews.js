console.log("JS linked");

// ELEMENTS
const stars = document.querySelectorAll(".stars i");
const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById("popup");

let selectedRating = 0;

// STAR SYSTEM
stars.forEach((star, index) => {

  star.addEventListener("mouseover", () => {
    fillStars(index);
  });

  star.addEventListener("mouseleave", () => {
    fillStars(selectedRating - 1);
  });

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
  if (selectedRating === 0) {
    alert("Please select a rating ⭐");
    return;
  }
  popup.style.display = "flex";
});