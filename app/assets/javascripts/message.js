$(function() {
  function buildHTML(message){
    if (message.image) {
      var html =
        `<div class='main-chat__message-list'>
          <div class='list-items'>
            <span class='list-items__name'>
              ${message.user_name}
            </span>
            <span class='list-items__date'>
              ${message.created_at}
            </span>
            <div class='list-items_message'>
              ${message.text}
              <img src=${message.image}, class='list-items__message__image' >
            </div>
          </div>
        </div>`
      return html;
    } else {
      var htmls =
        `<div class='main-chat__message-list'>
          <div class='list-items'>
            <span class='list-items__name'>
              ${message.user_name}
            </span>
            <span class='list-items__date'>
              ${message.created_at}
            </span>
            <div class='list-items_message'>
              ${message.text}
            </div>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e) {
    console.log(this);
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
    })
  });
});