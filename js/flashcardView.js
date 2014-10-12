function FlashcardView(flashcardModel, $container) {
  var flashcardTemplate = _.template([

        // '<% for (var i = 0; i < flashcardsCtrl.flashcards.length; i++) { %>',
          '<div class="flashcard">',
            '<div class="front">',
              '<p class="show-text"><%= frontOfCard %></p>',
            '</div>',
            '<div class="back>',
              '<p class="hide-text"><%= backOfCard %></p>',
            '</div>',
          '</div>',
        // '<% } %>',

  ].join(''));

  var compiledHTML = flashcardTemplate({
    frontOfCard: flashcardModel.front,
    backOfCard:  flashcardModel.back
  });

  var $view = $(compiledHTML);

  $container.append($view);

}