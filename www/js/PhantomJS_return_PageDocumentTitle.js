  var page = require('webpage').create();
  page.open('http://ionicons.com/', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
      var title = page.evaluate(function() {
        return document.title;
      });
    }
    console.log('Page title is ' + title);
    phantom.exit();
  });
