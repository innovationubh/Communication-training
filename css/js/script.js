// Animate cards on homepage
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = 0;
  });
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 300 * (index + 1));
  });
});

// Toggle exercise descriptions
function toggleDesc(id) {
  const desc = document.getElementById(id);
  desc.classList.toggle("show");
}

// Save user idea
function saveIdea(inputId, savedTextId, greetingId) {
  let idea = document.getElementById(inputId).value;
  if(idea.trim() === "") {
    alert("Please write your idea first!");
    return;
  }
  localStorage.setItem("myIdea", idea);
  document.getElementById(savedTextId).innerText = "✅ Your idea is saved!";
  document.getElementById(greetingId).style.display = "block";
  document.getElementById(greetingId).scrollIntoView({behavior: "smooth"});
}

// Save user feedback
function saveFeedback(inputId, savedTextId, greetingId) {
  let feedback = document.getElementById(inputId).value;
  if(feedback.trim() === "") {
    alert("Please write your feedback first!");
    return;
  }
  localStorage.setItem("myFeedback", feedback);
  document.getElementById(savedTextId).innerText = "✅ Feedback submitted!";
  document.getElementById(greetingId).style.display = "block";
  document.getElementById(greetingId).scrollIntoView({behavior: "smooth"});
}

// Load saved idea and feedback
window.onload = function() {
  let storedIdea = localStorage.getItem("myIdea");
  if (storedIdea) document.getElementById("userIdea").value = storedIdea;

  let storedFeedback = localStorage.getItem("myFeedback");
  if (storedFeedback) document.getElementById("userFeedback").value = storedFeedback;
}
