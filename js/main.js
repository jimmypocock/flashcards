$(function() {
  var $container = $('.container');

  flashcardsCtrl.showUpload($container);

  $('.upload-submit').click(function () {

      var input = $('#input')[0];
      var file = input.files[0];
      flashcardsCtrl.storeFlashcards(file);
      $(this).hide();

  });
  $('.view').click(function(){
      flashcardsCtrl.showFlashcards($container);
  });

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
      $('.active').next().addClass('active');
      $('.active').prev().removeClass('active').addClass('previous')
      break;

      case 38: // up
      break;

      case 39: // right
      $('.active').prev().removeClass('previous').addClass('active');
      $('.active').next().removeClass('active');
      break;

      case 40: // down
      $('.active').toggleClass('flipped')
      $('.active').find('p').toggleClass('show-text');
      break;

      default: return; // exit
    }
    e.preventDefault();
  });
});