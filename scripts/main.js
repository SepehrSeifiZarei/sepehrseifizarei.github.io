// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

// document.addEventListener('DOMContentLoaded', function () {
//   const toggleButton = document.getElementById('theme-toggle'); // Finds the toggle button
//   const html = document.documentElement; // Targets the <html> element for theme toggling

//   // Check if there's a saved theme in localStorage; if not, default to 'dark'
//   const savedTheme = localStorage.getItem('theme') || 'dark';
//   html.setAttribute('data-theme', savedTheme); // Sets the theme based on the saved value

//   // Add an event listener to the button to toggle the theme
//   toggleButton.addEventListener('click', function () {
//       // Get the current theme and switch it
//       const currentTheme = html.getAttribute('data-theme');
//       const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//       html.setAttribute('data-theme', newTheme); // Set the new theme
//       localStorage.setItem('theme', newTheme); // Save the new theme preference in localStorage
//   });
// });

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
