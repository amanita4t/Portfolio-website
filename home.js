// ---------- FOOTER YEAR ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- PROJECT MODAL ----------
function openModal(btn){
  const card = btn.closest(".card");

  document.getElementById("modalTitle").textContent = card.dataset.title;
  document.getElementById("modalDesc").textContent = card.dataset.desc;

  const tags = document.getElementById("modalTags");
  tags.innerHTML = "";

  card.dataset.tags.split(",").forEach(tag=>{
    const span = document.createElement("span");
    span.textContent = tag;
    span.style.marginRight = "8px"; // keep spacing
    tags.appendChild(span);
});


  document.getElementById("modalSourceBtn").onclick = () => {
    window.open(card.dataset.github,"_blank");
  };

  document.getElementById("modal").classList.add("show");
}

function closeModal(){
  document.getElementById("modal").classList.remove("show");
}

// ---------- CONTACT MODAL ----------
function openContactModal(){
  document.getElementById("contactModal").classList.add("show");
}

function closeContactModal(){
  document.getElementById("contactModal").classList.remove("show");
}

// ---------- RESUME ----------
function downloadResume(){
  window.open("resume.pdf","_blank");
}

// ---------- SKILLS ----------
const orbs = document.querySelectorAll(".orb");
const detail = document.getElementById("skillsDetail");

orbs.forEach(orb=>{
  orb.addEventListener("click",()=>{
    orbs.forEach(o=>o.classList.remove("active"));
    orb.classList.add("active");
    detail.innerHTML = orb.querySelector(".tooltip").innerHTML;
  });
});

// ---------- SCROLL DOTS ----------
document.querySelectorAll(".scroll-dot").forEach(dot=>{
  dot.addEventListener("click",()=>{
    document.getElementById(dot.dataset.section)
      .scrollIntoView({behavior:"smooth"});
  });
});

// ---------- FULLSCREEN SCROLL ----------
let currentSection = 0;
const sections = document.querySelectorAll(".fullscreen-section");
const dots = document.querySelectorAll(".scroll-dot");
let isScrolling = false;

function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

function handleWheelScroll(e) {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0) {
    currentSection = Math.min(currentSection + 1, sections.length - 1);
  } else {
    currentSection = Math.max(currentSection - 1, 0);
  }

  scrollToSection(currentSection);

  setTimeout(() => {
    isScrolling = false;
  }, 900);
}

window.addEventListener("wheel", handleWheelScroll, { passive: false });

// ---------- THEME TOGGLE ----------
// ---------- THEME TOGGLE WITH ICON ----------
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    // toggle light mode class
    document.body.classList.toggle("light-mode");

    // update button icon
    if (document.body.classList.contains("light-mode")) {
      themeBtn.textContent = "☀️"; // light mode active
    } else {
      themeBtn.textContent = "🌙"; // dark mode active
    }

    // optionally save preference
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
    );
  });

  // restore saved preference on load
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
  }
}


