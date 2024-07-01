/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * Helper Functions
*/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Main Functions
*/
// Build the nav
sections.forEach(section => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.textContent = section.getAttribute('data-nav');
  anchor.setAttribute('href', `#${section.id}`);
  anchor.classList.add('menu__link');
  listItem.appendChild(anchor);
  navbarList.appendChild(listItem);

  // Scroll to section on link click
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Set sections as active
function makeActive() {
  sections.forEach(section => {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add('your-active-class');
      document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
    }
  });
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
  makeActive();
});

makeActive();
