$(function() {
  var $container = $('.container');

  flashcardsCtrl.showUpload($container);

  $('.upload-submit').click(function () {




      // // $container.empty();
      var input = $('#input')[0];
      // debugger;
      var file = input.files[0];
      flashcardsCtrl.storeFlashcards(file);
      $(this).hide();
  });
  $('.view').click(function(){
      flashcardsCtrl.showFlashcards($container);
  });
});
      // var reader = new FileReader();
      // debugger;

      // reader.onload = function(e) {
      //   var quiz = reader.result.replace(/(\r\n|\n|\r|\t|\n\t)/gm,"");

      //   quiz = JSON.stringify(quiz)
      //   quiz = quiz.CSVToArray(quiz, '|');

      //   files = {
      //     front: [],
      //     back: []
      //   };

      //   for (var i = 0; i < quiz.length; i++) {
      //     if (i % 2 == 0) {
      //       files.front.push(quiz[i]);
      //     } else {
      //       files.back.push(quiz[i]);
      //     }
      //   }

      //   console.log(files);
      // };

      // reader.readAsText(file);

      // ref: http://stackoverflow.com/a/1293163/2343
    // This will parse a delimited string into an array of
    // arrays. The default delimiter is the comma, but this
    // can be overriden in the second argument.
    // var CSVToArray = function( strData, strDelimiter ){
      // debugger;
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        // strDelimiter = (strDelimiter || ",");

        // Create a regular expression to parse the CSV values.
        // var objPattern = new RegExp(
        //     (
                // Delimiters.
                // "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

                // Quoted fields.
                // "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

                // Standard fields.
                // "([^\"\\" + strDelimiter + "\\r\\n]*))"
            // ),
            // "gi"
            // );


        // Create an array to hold our data. Give the array
        // a default empty first row.
        // var arrData = [[]];

        // Create an array to hold our individual pattern
        // matching groups.
        // var arrMatches = null;


        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        // while (arrMatches = objPattern.exec( strData )){

            // Get the delimiter that was found.
            // var strMatchedDelimiter = arrMatches[ 1 ];

            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            // if (
            //     strMatchedDelimiter.length &&
            //     strMatchedDelimiter !== strDelimiter
            //     ){

                // Since we have reached a new row of data,
                // add an empty row to our data array.
                // arrData.push( [] );

            // }

            // var strMatchedValue;

            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            // if (arrMatches[ 2 ]){

                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
  //               strMatchedValue = arrMatches[ 2 ].replace(
  //                   new RegExp( "\"\"", "g" ),
  //                   "\""
  //                   );

  //           } else {

  //               // We found a non-quoted value.
  //               strMatchedValue = arrMatches[ 3 ];

  //           }


  //           // Now that we have our value string, let's add
  //           // it to the data array.
  //           arrData[ arrData.length - 1 ].push( strMatchedValue );
  //       }

  //       // Return the parsed data.
  //       return ( arrData );
  //   }
  //       // debugger;
  //       // $('#input').parse({
  //       //     before: function (file, inputElem) {
  //       //         console.log("BEFORE", file, inputElem);
  //       //     },
  //       //     error: function (err, file, elem) {
  //       //         console.log("ERROR", err, file, elem);
  //       //     },
  //       //     complete: function (data, file, inputElem, event) {
  //       //         console.log("COMPLETE", data, file, inputElem, event);
  //       //         render(data);
  //       //     },
  //       //     config: userConfig()
  //       // });
  // });

  //   $('#tabdelim').click(function() {
  //       $('#delim').val("\t");
  //   });

  //   function userConfig() {
  //       return {
  //           delimiter: $("#delim").val(),
  //           header: $('#header').is(':checked'),
  //           dynamicTyping: $('#dyntype').is(':checked')
  //       };
  //   }

  //   function render(results) {
  //       $('#output').text(JSON.stringify(results, undefined, 2));
  //   }

  // $('.upload-submit').on(function() {
  //   $container.empty();
  //   var input = $('#input')[0];
  //   var file = input.files[0];
  //   var results = Papa.parse(csv);

  //   Papa.parse(file, {
  //     config: {
  //       complete: function(results, file) {
  //         console.log("File done:", file, results)
  //       }
  //     },
  //     complete: function(results) {
  //       console.log(results);
  //     }
  //   });
  // });

  // var data;

  // function handleFileSelect(evt) {
  //   var file = evt.target.files[0];

  //   Papa.parse(file, {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: function(results) {
  //       data = results;
  //     }
  //   });
  // }

  // $(document).on('click', '.upload-submit',function(){
  //   $("#csv-file").change(handleFileSelect);
  // });

  // $(document).on('click', '.upload-submit', function() {
  //   $container.empty();
  //   $("#csv-file").change(handleFileSelect);
  //   var input = $('#input');
  //   // var file = input.files;
  //   // var results = Papa.parse(csv);
  //   input.parse({
  //     config: function() {
  //       return {
  //         delimiter: $('#delim').val(),
  //         header: $('header').is(':checked'),
  //         dynamicTyping: $('#dyntype').is(':checked')
  //       };
  //     },
  //     before: function(file, inputElem) {
  //       console.log("BEFORE", file, inputElem);
  //     },
  //     error: function(err, file, elem) {
  //       console.log("ERROR", err, file, elem);
  //     },
  //     complete: function(data, file, inputElem, event) {
  //       console.log("COMPLETE", data, file, inputElem, event);
  //       render(data);
  //     }
  //   });
  // });

  // function render(results) {
  //   $('.container').text(JSON.stringify(results, undefined, 2));
  // }
// });

// ;(function(e){"use strict";function t(e){return typeof e==="function"}function n(e){return typeof e!=="undefined"}function r(e){function a(e){if(typeof e.delimiter!=="string"||e.delimiter.length!=1)e.delimiter=o.delimiter;if(e.deimiter=='"'||e.delimiter=="\n")e.delimitelr=o.delimiter;if(typeof e.header!=="boolean")e.header=o.header;if(typeof e.dynamicTyping!=="boolean")e.dynamicTyping=o.dynamicTyping;if(typeof e.preview!=="number")e.preview=o.preview;return e}function f(e){var t=[",","  ","|",";"];var n,s,o;for(var u in t){var a=t[u];var f=0,l=0;var c=(new r({delimiter:a,header:false,dynamicTyping:false,preview:10})).parse(e);for(var h in c.results){var p=c.results[h].length;l+=p;if(typeof o==="undefined"){o=p;continue}else if(p>1){f+=Math.abs(p-o);o=p}}l/=c.results.length;if((typeof s==="undefined"||f<s)&&l>1.99){s=f;n=a}}i.delimiter=n;return!!n}function l(){return{i:0,lineNum:1,field:0,fieldVal:"",line:"",ch:"",inQuotes:false,parsed:i.header?{fields:[],rows:[]}:[[]],errors:{length:0}}}function c(){var e=s.i>0&&v(s.i-1)||s.i==0;var t=s.i<n.length-1&&v(s.i+1)||s.i==n.length-1;var r=s.i<n.length-1&&n[s.i+1]=='"';if(s.inQuotes&&r){s.fieldVal+='"';s.i++}else if(e||t)s.inQuotes=!s.inQuotes;else x("Quotes","UnexpectedQuotes","Unexpected quotes")}function h(){p()}function p(){s.fieldVal+=s.ch}function d(){if(s.ch==i.delimiter)g();else if(s.ch=="\r"&&s.i<n.length-1&&n[s.i+1]=="\n"||s.ch=="\n"&&s.i<n.length-1&&n[s.i+1]=="\r"){y();s.i++}else if(s.ch=="\n"||s.ch=="\r")y();else p()}function v(e){if(e>=n.length)return false;var t=n[e];if(t==i.delimiter||t=="\n"||t=="\r"&&e<n.length-1&&n[e+1]=="\n")return true;else return false}function m(e){if(e>=n.length)return false;if(e<n.length-1)return n[e]=="\n"||n[e]=="\r"&&n[e+1]=="\n";else return n[e]=="\n"}function g(){if(i.header){if(s.lineNum==1)s.parsed.fields.push(s.fieldVal);else{var e=s.parsed.rows[s.parsed.rows.length-1];var t=s.parsed.fields[s.field];if(t){if(i.dynamicTyping)s.fieldVal=w(s.fieldVal);e[t]=s.fieldVal}else{if(typeof e.__parsed_extra==="undefined")e.__parsed_extra=[];e.__parsed_extra.push(s.fieldVal)}}}else{if(i.dynamicTyping)s.fieldVal=w(s.fieldVal);s.parsed[s.parsed.length-1].push(s.fieldVal)}s.fieldVal="";s.field++}function y(){b();if(i.header&&s.lineNum>0)s.parsed.rows.push({});else s.parsed.push([]);s.lineNum++;s.line="";s.field=0}function b(){g();var e=E();if(!e&&i.header)S()}function w(e){var t=u.floats.test(e);return t?parseFloat(e):e}function E(){if(u.empty.test(s.line)){if(i.header){if(s.lineNum==1){s.parsed.fields=[];s.lineNum--}else s.parsed.rows.splice(s.parsed.rows.length-1,1)}else s.parsed.splice(s.parsed.length-1,1);return true}return false}function S(){if(!i.header)return true;if(s.parsed.rows.length==0)return true;var e=s.parsed.fields.length;var t=0;var n=s.parsed.rows[s.parsed.rows.length-1];for(var r in n)if(n.hasOwnProperty(r))t++;if(t<e)return x("FieldMismatch","TooFewFields","Too few fields: expected "+e+" fields but parsed "+t);else if(t>e)return x("FieldMismatch","TooManyFields","Too many fields: expected "+e+" fields but parsed "+t);return true}function x(e,t,n,r){var o=i.header?s.parsed.rows.length?s.parsed.rows.length-1:undefined:s.parsed.length-1;var u=r||o;if(typeof s.errors[u]==="undefined")s.errors[u]=[];s.errors[u].push({type:e,code:t,message:n,line:s.lineNum,row:o,index:s.i});s.errors.length++;return false}function T(){return{results:s.parsed,errors:s.errors}}function N(e){s=l();n=e}var t=this;var n="";var i={};var s=l();var o={delimiter:"",header:true,dynamicTyping:true,preview:0};var u={floats:/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,empty:/^\s*$/};this.parse=function(e){if(typeof e!=="string")return T();N(e);if(!i.delimiter&&!f(e)){x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to comma","config");i.delimiter=","}for(s.i=0;s.i<n.length;s.i++){if(i.preview>0&&s.row>=i.preview)break;s.ch=n[s.i];s.line+=s.ch;if(s.ch=='"')c();else if(s.inQuotes)h();else d()}b();if(s.inQuotes)x("Quotes","MissingQuotes","Unescaped or mismatched quotes");return T()};this.setOptions=function(e){e=a(e);i={delimiter:e.delimiter,header:e.header,dynamicTyping:e.dynamicTyping,preview:e.preview}};this.getOptions=function(){return{delimiter:i.delimiter,header:i.header,dynamicTyping:i.dynamicTyping,preview:i.preview}};this.setOptions(e)}e.fn.parse=function(r){function i(e,n,i){if(t(r.error))r.error({name:e},n,i)}var s=n(r.config)?r.config:{};this.each(function(o){var u=e(this).prop("tagName").toUpperCase()=="INPUT"&&e(this).attr("type")=="file"&&window.FileReader;if(!u)return true;var a={delimiter:s.delimiter,header:s.header,dynamicTyping:s.dynamicTyping};if(!this.files||this.files.length==0){i("NoFileError",undefined,this);return true}for(var f=0;f<this.files.length;f++){var l=this.files[f];if(l.type.indexOf("text")<0){i("TypeMismatchError",l,this);continue}if(t(r.before)){var c=r.before(l,this);if(typeof c==="object"){if(n(c.delimiter))a.delimiter=c.delimiter;if(n(c.header))a.header=c.header;if(n(c.dynamicTyping))a.dynamicTyping=c.dynamicTyping}else if(c==="skip")continue;else if(c===false){i("AbortError",l,this);return false}}var h=new FileReader;if(t(r.error))h.onerror=function(){r.error(h.error,l,this)};var p=this;h.onload=function(n){var i=n.target.result;var s=e.parse(i,a);if(t(r.complete))r.complete(s,l,p,n)};h.readAsText(l)}});return this};e.parse=function(e,t){var n=new r(t);return n.parse(e)}})(jQuery);



// $(function () {
    // $('#parseText').click(function () {
    //     var results = $.parse($('#tb').val(), userConfig());
    //     render(results);
    // });


// });