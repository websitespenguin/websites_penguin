const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  mobileToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    mobileToggle.textContent = "☰";
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("span");
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.maxHeight = null;
    });

    document.querySelectorAll(".faq-question span").forEach((item) => {
      item.textContent = "+";
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  // Cambia este número por tu WhatsApp real con indicativo de Colombia.
  const businessWhatsApp = "57322146388";

  const text = `Hola, quiero cotizar una página web.%0A%0ANombre: ${name}%0AWhatsApp: ${phone}%0AServicio: ${service}%0AIdea: ${message}`;
  const url = `https://wa.me/${businessWhatsApp}?text=${text}`;

  window.open(url, "_blank");
});
