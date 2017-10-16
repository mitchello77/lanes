var objCurrentScreen = $("#intro");

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
    if ($(this).attr('href') === undefined) {
      if ($(this).data('gotoscreen') !== undefined && $(this).data('gotoscreen') !== "") {
        gotoScreen($(this).data('gotoscreen'));
      }
    }
  });

  $(".btn").click(function(){
    if ($(this).attr('type') === 'submit') {
      return;
    }
    var _currentScreen = $(this).closest('.screen');
    var nextScreenid = $(this).data('gotoscreen');
    if (nextScreenid !== undefined && nextScreenid !== "") {
      if (_currentScreen.attr('id') != nextScreenid) {
        gotoScreen(nextScreenid);
      }
    } else {
      console.log($(this));
      console.log("Missing data-gotoscreen");
    }
  });

  $("nav li").click(function(){
    toggleMenu($(this).closest('.screen').attr('id'));
  });

  $("button.menu").click(function(){
    toggleMenu($(this).parent().parent().attr('id'));
  })

  $("button.search").click(function(){
    toggleSearch($(this).parent().parent().attr('id'));
  })

  $("form").submit(function(e){
    e.preventDefault();
    var nextScreenid = $(this).find(':submit').data('gotoscreen');
    if (nextScreenid !== undefined && nextScreenid !== "") {
      if (objCurrentScreen.attr('id') != nextScreenid) {
        gotoScreen(nextScreenid);
      }
    } else {
      console.log($(this).find(':submit'));
      console.log("Missing data-gotoscreen");
    }
  });

  /* $('#login form').submit(function(e){
    e.preventDefault();
    var email = document.querySelector('#username');
    var pass = document.querySelector('#password');
    if (email.validity.valid && pass.validity.valid) {
      gotoScreen("#dashboard");
    }
  }); */

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
  if (search.hasClass('is-active')) {
    search.find('input').blur();
  } else {
    search.find('input').focus();
  }
  btn.toggleClass("is-active");
  search.toggleClass("is-active");
  if ($("#" + screenId + " main nav").hasClass("is-active")) {
    $("#" + screenId + " main nav").removeClass("is-active");
    $("#" + screenId + " .btn.menu").removeClass("is-active");
  }
}

function gotoScreen(id) {
  var newScreen = $(id);
  if (newScreen.length > 0) {
      objCurrentScreen.addClass('hidden');
      objCurrentScreen = $(id);
      objCurrentScreen.removeClass('hidden');
  } else {
    console.log("ID: " + id + " is not a valid screen.");
  }
}
