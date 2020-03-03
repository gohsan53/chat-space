$(function() {
  $('#new_message').on('submit', function(e) {
    console.log(this);
    e.preventDefault()
  });
});