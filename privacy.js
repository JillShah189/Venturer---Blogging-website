// This script highlights the current page in the navigation menu
const currentPage = document.location.pathname;
const menuLinks = document.querySelectorAll('nav a');

for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i];
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
}

// This script adds a scroll-to-top button
const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
const rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.1 ) {
    // Show button
    scrollToTopBtn.classList.add("show");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  // Scroll to top smoothly
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
