var page = require('webpage').create();
page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});
/*To run this commmand open a terminal window,
navigate to the directory where the JS file lives
and type:
 
  PhantomJS_return_PageDocumentTitle.js http://www.google.com

  The script will open http://google.com, and grab the value in document.title
  and display it in the terminal log.
