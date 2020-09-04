// cursor
new kursor(
{
  type: 1,
  removeDefaultCursor:true,
  color : "#f59b25"
});

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

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});