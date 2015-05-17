$(document).ready(function() {
  function doCallback() {
    var user = $(this).data('user');
    var text = ($(this).data('message') || $(this).text()) + " " + window.location.href + (user ? " via @" + $(this).data('user') : '');
    var original_start = new Date();
    var lag = 1000;

    var deeplink_url = "twitter://post?message=" + encodeURIComponent(text);
    window.location.href = deeplink_url;

    setTimeout(function() {
      var time_spent_waiting = (new Date() - original_start);
      if (time_spent_waiting > (2.0 * lag)) {
        // We can assume they have the app, so do nothing.
      } else {
        // That was too fast so we can assume they don't have the app.
        var intent_url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
        window.open(intent_url, "_blank");
      }
    }, lag);
    return false;
  }

  $(".tweetable").on("click", doCallback);
});
