document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = [
      { name: "Lauryn", role: "Login/Sign Up & Progress Page", description: "Implemented the login/signup flow, interactive progress tracking, and review input features." },
      { name: "Zoe", role: "Interactive Gallery & Navigation", description: "Designed the interactive gallery with hover effects and clickable movies, and created the main navigation bar." },
      { name: "Amelia", role: "Ratings & Reviews", description: "Implemented rating and review functionality across multiple pages, including blogs and selection pages." }
    ];
  
    const nameEl = document.querySelector(".team-interactive h3");
    const descEl = document.querySelector(".team-interactive p");
    const dots = document.querySelectorAll(".team-dot");
  
    function showMember(index){
      const member = teamMembers[index];
      nameEl.textContent = member.name + " — " + member.role;
      descEl.textContent = member.description;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }
  
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => showMember(i));
    });
  
    // Default to first member
    showMember(0);
  });
  