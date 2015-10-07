$(document).ready(function () {

  function closeIt () {
    $('.box .box-title').removeClass('active');
    $('.box .box-content').removeClass('open').addClass('closed');

  }

  $('.box-title').on('click', function (thing) {

    var clickMe = $(this).attr('href');

    if($(thing.target).is('.active')) {
      closeIt();
    } else {
      closeIt();
      $(this).addClass('active');
      $('.box ' + clickMe).addClass('open').removeClass('closed');
    }

    thing.preventDefault();


  });


});