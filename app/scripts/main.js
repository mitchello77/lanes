$(function() {
  // We Ready Boiis
  FastClick.attach(document.body);
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  // since were not using <a> tags
  $("a").click(function(){

  });

  $(".btn.menu").click(function(){
    toggleMenu($(this).parent().parent().attr('id'));
  })

  $(".btn.search").click(function(){
    toggleSearch($(this).parent().parent().attr('id'));
  })

  });

function toggleMenu(screenId) {
  var btn = $("#" + screenId + " .btn.menu");
  var menu = $("#" + screenId + " main nav");
  btn.toggleClass("is-active");
  menu.toggleClass("is-active");
  if ($("#" + screenId + " main .search").hasClass("is-active")) {
    $("#" + screenId + " main .search").removeClass("is-active");
  }
}

function toggleSearch(screenId) {
  var btn = $("#" + screenId + " .btn.search");
  var search = $("#" + screenId + " main .search");
  btn.toggleClass("is-active");
  search.toggleClass("is-active");
  if ($("#" + screenId + " main nav").hasClass("is-active")) {
    $("#" + screenId + " main nav").removeClass("is-active");
    $("#" + screenId + " .btn.menu").removeClass("is-active");
  }
}
