function UploadView($container) {
  var uploadTemplate = _.template([
    '<div class="upload">',
      '<div class="upload-header">',
        '<h2>Upload an .xls file</h2>',
        '<h4>To Get Started</h4>',
        '<input type="file" id="input" class="upload-input" name="upload-input">',
        '<button type="button" class="upload-submit">Upload</button>', '<button class="view" type="button">view</button>',
      '</div>',
    '<div>'
  ].join(''));

  var compiledHTML = uploadTemplate({

  });

  var $view = $(compiledHTML);

  $container.append($view);
}