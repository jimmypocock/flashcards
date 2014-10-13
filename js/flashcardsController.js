var flashcardsCtrl = {
  flashcards: [],
  showUpload: function($container) {
    var uploadView = new UploadView($container);
  },
  storeFlashcards: function(file) {

    var that = this;

    var reader = new FileReader();

    reader.onload = function(e){

      var result = reader.result.replace(/(\r\n|\n|\r|\t|\n\t)/gm,"|");
      result = result.split('|');

      var temp;
      function resetTemp(){
        temp = {
          front: undefined,
          back:  undefined
        }
      }
      resetTemp();

      for (var i = 0; i < result.length; i++){

        if (i % 2 == 0){
          temp.front = result[i];
        } else {
          temp.back = result[i];
        }
        if (temp.front != undefined && temp.back != undefined){
          that.flashcards.push(temp);
          resetTemp();
        }
      }


    }

    reader.readAsText(file);

  },
  showFlashcards: function($container) {
    $container.empty();

    // for (var i = 0; i < this.flashcards.length; i++){

      var flashcardModel = new Flashcard(this.flashcards);
      var flashcardView = new FlashcardView(flashcardModel, $container);
    // }

  }
};