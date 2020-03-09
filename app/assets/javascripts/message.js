$(function () {
  function buildHTML(message) {
    if (message.image) {
      var html = `<div class='message' data-message-id='${message.id}'></div>
        <div class='list-items'>
          <span class='list-items__name'>
            ${message.user_name}
          </span>
          <span class='list-items__date'>
            ${message.created_at}
          </span>
          <div class='list-items__message'>
            ${message.text}
            <img src=${message.image} class='list-items__message__image' >
          </div>
        </div>`
      return html;
    } else {
      var html = `<div class='message' data-message-id='${message.id}'></div>
        <div class='list-items'>
          <span class='list-items__name'>
            ${message.user_name}
          </span>
          <span class='list-items__date'>
            ${message.created_at}
          </span>
          <div class='list-items__message'>
            ${message.text}
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function (e) {
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
      .done(function (data) {
        var html = buildHTML(data);
        $('.main-chat__message-list').append(html);
        $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
        $('form')[0].reset();
      })
      .fail(function() {
        alert('メッセージを送信できませんでした');
      })
      .always(function() {
        $('.form__submit-btn').removeAttr('disabled');
      })
  });
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('message-id');
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});