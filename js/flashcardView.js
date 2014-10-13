function FlashcardView(flashcardModel, $container) {
  var flashcardTemplate = _.template([
    '<div class="slider">',
          '<div class="holder">',
            '<div class="flashcard active first">',
              '<div class="front">',
                '<p class="show-text">Press the DOWN ARROW KEY to flip the flashcard.</p>',
              '</div>',
              '<div class="back">',
                '<p class="hide-text">Press LEFT ARROW KEY to move to your first flashcard.</p>',
              '</div>',
            '</div>',
        '<% for (var i = 0; i < cards.length; i++) { %>',
          '<div class="flashcard">',
            '<div class="front">',
              '<p class="show-text"><%= cards[i].front %></p>',
            '</div>',
            '<div class="back">',
              '<p class="hide-text"><%= cards[i].back %></p>',
            '</div>',
          '</div>',
        '<% } %>',
        '<div class="flashcard lastcard flipped">',
          '<div class="front">',
            '<p class="show-text">This it the last card of the deck.</p>',
          '</div>',
          '<div class="back">',
            '<p class="hide-text">This is the last card of the deck.</p>',
          '</div>',
        '</div>',

  ].join(''));

  var compiledHTML = flashcardTemplate({
    cards: flashcardModel.cards
  });

  var $view = $(compiledHTML);

  $container.append($view);

}