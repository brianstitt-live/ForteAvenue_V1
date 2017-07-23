var page = new WebPage(), testindex = 0, loadInProgress = false;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log("load finished");
};

var steps = [
  function() {
    //Load Login Page
    page.open("https://website.com/theformpage/");
  },
  function() {
    //Enter Credentials
    page.evaluate(function() {

      var arr = document.getElementsByClassName("login-form");
      var i;

      for (i=0; i < arr.length; i++) {
        if (arr[i].getAttribute('method') == "POST") {

          arr[i].elements["email"].value="mylogin";
          arr[i].elements["password"].value="mypassword";
          return;
        }
      }
    });
  },


  /*I figured it out. Basically it's an async issue.
  You can't just submit and expect to render the subsequent
  page immediately. You have to wait until the onLoad event
  for the next page is triggered. 
