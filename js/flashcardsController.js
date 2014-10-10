var flashcardsCtrl = {
  flashcards: [],
  showUpload: function($container) {
    var uploadView = new UploadView($container);
  },
  storeFlashcards: function(file) {





    if (file.type.match()) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var flashcard = reader.result;

        flashcards.push(flashcard);
      }

      reader.readAsText(file);
    } else {
      display.innerText = "Flashcard didn't upload.";
    }
  },
  showFlashcards: function($container) {
    var flashcardModel = new Flashcard();
    var flashcardView = new FlashcardView();
  }
};