document.addEventListener('DOMContentLoaded', function() {
    // Show spinner when a link is clicked
    document.querySelectorAll('.show-spinner').forEach(function(link) {
      link.addEventListener('click', function() {
        document.getElementById('loading-spinner').style.display = 'block';
      });
    });
  
    // Hide spinner when the page is fully loaded
    window.addEventListener('load', function() {
      document.getElementById('loading-spinner').style.display = 'none';
    });
  });