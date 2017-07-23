// script: meteoclip.js
var page = new WebPage();
page.open('http://www.google.fr/search?q=meteo+montpellier,+France', function (status) {
    if (status !== 'success') {
        output.error = 'Unable to access network';
    } else {
        page.clipRect = {
            top: 5,
            left: 5,
            width: 800,
            height: 900
        }
        page.render('screencaptures/meteo.png');
        console.log('Capture saved');
    }
    phantom.exit();
});
/*To run this commmand open a terminal window,
navigate to the directory where the JS file lives
and type:

    phantomjs PhantomJS_webpage_screenshot.js

  The script will open http://www.google.fr/search?q=meteo+montpellier,+France', search for "montpellier, France", and take a picture of the webpage
  and save it as screencaptures/meteo.png
