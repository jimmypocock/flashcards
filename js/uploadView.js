function UploadView($container) {
  var uploadTemplate = _.template([
    '<div class="upload">',
      '<h2>Upload an Excel file</h2>',
      '<input type="file" id="fileInput">',
      '<button type="button" class="uploadButton">Upload</button>',
    '<div>'
  ].join(''));

  var compiledHTML = uploadTemplate({

  });

  var $view = $(compiledHTML);

  $container.append($view);
}