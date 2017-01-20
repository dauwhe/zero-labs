// what's the path to the manifest?
function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return (match
    ? decodeURIComponent(match[1].replace(/\+/g, ' '))
    : null);
}

//what folder is the manifest in
function getPathByName() {
  //this is deeply flawed. fails on MobyDick/folder/manifest.json
  var path = RegExp('[?]manifest=' + '([^/]*)').exec(window.location.search);
  return path
    ? decodeURIComponent(path[1].replace(/\+/g, ' '))
    : null;
}

var manifest = getParameterByName('manifest');
var count = 0;
var NightLink = document.getElementById('night');
var iframe = document.getElementById('pub')
// at start, prev button should be disabled
document.getElementById("decrement").disabled = true;


function reqListener () {

var index = this.responseXML
// hmmm. using first nav in index.html for now
var spine = index.getElementsByTagName('nav')[0].getElementsByTagName('ol')[0];
console.log(spine);
var length = spine.length;


// by default open first spine item
  
iframe.setAttribute('src', spine.getElementsByTagName('li')[0].getElementsByTagName('a')[0].href);






    // so we're trying to deal with fixed layout, by setting the iframe to a nice size



iframe.addEventListener("load", function() {
var docContents = iframe.contentWindow.document;
var viewport = docContents.getElementsByTagName('meta')[1].getAttribute('content');
// var viewport = $("#pub").contents().find('meta[name=viewport]').attr("content");

console.log(viewport);

if ( viewport ) {
var reWidth = /width=(\d+),/;
var reHeight = /height=(\d+)/;
var width = viewport.match(reWidth, '$1')[1];
var height = viewport.match(reHeight, '$1')[1];
var intFrameWidth = window.innerWidth;
var horizonalScale = intFrameWidth/width;
var actualWidth = width * horizonalScale;
var actualHeight = height * horizonalScale;

console.log(horizonalScale);


iframe.setAttribute('style', 'transform: scale(' + horizonalScale + '); transform-origin: 0 0; width: ' + width + 'px; height: ' + height + 'px;'  );

} else {}
  
});







// open index.html
var tocButton = document.getElementById('toc');
tocButton.addEventListener('click', function() {
iframe.setAttribute('src', getPathByName() + '/index.html');
});


// move forward through spine
var incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', function() {

count++;

iframe.setAttribute('src', spine.getElementsByTagName('li')[count].getElementsByTagName('a')[0].href);
 
 if (count == (length -1)) {
          document.getElementById("increment").disabled = true;
              } else {
                  document.getElementById("increment").disabled = false;
            };
            
      // we need to re-enable the previous button if we're not at the first item
            if (count != 0) {
                  document.getElementById("decrement").disabled = false;
            };
    });
    
// move backwards through spine
var decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', function() {
count--;
iframe.setAttribute('src', spine.getElementsByTagName('li')[count].getElementsByTagName('a')[0].href);
 

  // need to enable previous button if not at end
       if (count != (length -1)) {
                  document.getElementById("increment").disabled = false;
            };
       // disable previous button if at start     
            if (count === 0) {
                  document.getElementById("decrement").disabled = true;
            };
            

            
}, false);
}


// get index.html file of book to be displayed
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", manifest);
oReq.responseType = "document";
oReq.send();



NightLink.addEventListener('click', function(){
  var inside = iframe.contentWindow.document;
  
  
 

  //NightLink.addEventListener('click', function() {

  if (NightLink.value==="Night") {
    inside.getElementsByTagName('html')[0].style.filter = 'invert(1) hue-rotate(180deg)';

    // need to check for img elements before altering styles
    // code TK... if there's no IMG then getElementsByTagName returns an empty array
    //inside.getElementsByTagName('img').style.filter = 'invert(1) hue-rotate(180deg)';

    inside.getElementsByTagName('html')[0].style.background = 'black';

    document.getElementsByTagName('main')[0].style.background = 'black';
    document.getElementById('pub').style.borderColor = 'black';

    NightLink.value = 'Day';
  } else {
    NightLink.value = 'Night';
    inside.getElementsByTagName('html')[0].style.background = 'white';
    inside.getElementsByTagName('html')[0].style.filter = 'invert(0) hue-rotate(0deg)';
    document.getElementsByTagName('main')[0].style.background = 'white';
    document.getElementById('pub').style.borderColor = 'white';
  }
}, false);

// want to increase/decrease font size inside iframe
fontPluslink = document.getElementById('bigger');
fontPluslink.addEventListener('click', function() {
  console.log('clicked bigger');
  var inside = iframe.contentWindow.document;

  var cur = window.getComputedStyle(inside.getElementsByTagName('body')[0]).fontSize;
  inside.getElementsByTagName('body')[0].style.fontSize = parseInt(cur) + 2 + "px"
}, false);

fontMinuslink = document.getElementById('smaller');
fontMinuslink.addEventListener('click', function() {
  var inside = iframe.contentWindow.document;
  var cur = window.getComputedStyle(inside.getElementsByTagName('body')[0]).fontSize;
  inside.getElementsByTagName('body')[0].style.fontSize = parseInt(cur) - 2 + "px"
}, false);

// night mode!!!!
