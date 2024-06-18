document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const content = document.getElementById('parallax-content');

  // Set initial background color to black
  body.style.backgroundColor = 'black';

  // Wait for a short delay to show the black background
  setTimeout(function() {
    // Then add the class for the slide-down transition
    content.classList.add('slide-down-enter-active');

    // Change background color back to its original after a short delay
    setTimeout(function() {
      body.style.backgroundColor = 'rgba(15, 23, 42, var(--tw-bg-opacity))'; // Tailwind bg-slate-900 color
    }, 1000); // Adjust this delay as needed
  }, 100); // Adjust this delay to control how long the black background is shown
});
