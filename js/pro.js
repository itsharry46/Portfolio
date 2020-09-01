// page animation fade in
$(document).ready(function()
{
  $('body').css('display', 'none');
  $('body').fadeIn(3000);
});

// page animation fade out
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});