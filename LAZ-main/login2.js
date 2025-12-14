document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("authOverlay");
  const closeBtn = document.getElementById("closeAuth");

  if (!overlay || !closeBtn) return;

  // Open modal from ANY login button
  document.querySelectorAll(".loginbtn").forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.classList.add("active");
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  // Close when clicking background
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});
