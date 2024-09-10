// Creates sliding anymation for text and logos
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const logos = document.querySelectorAll(".logo");

logos.forEach((logo, index) => {
  const delay = 100 * index;
  logo.style.transitionDelay = `${delay}ms`;
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));
