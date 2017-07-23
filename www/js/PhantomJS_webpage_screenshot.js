var page = require('webpage').create();
page.open('http://google.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
/*To run this commmand open a terminal window,
navigate to the directory where the JS file lives
and type:

  PhantomJS_webpage_screenshot.js

  The script will open http://google.com, and take a picture of the webpage
  and save it as exmample.png
