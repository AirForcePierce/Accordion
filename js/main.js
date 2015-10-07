$(document).ready(function () {

  //Function to close box when called

  function closeIt () {
    $('.box .box-title').removeClass('active');
    $('.box .box-content').removeClass('open').addClass('closed');

  }

  //Function that looks for specific href to open that element

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