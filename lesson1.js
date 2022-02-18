/*
LESSON1
1) intro to javascript
2) history of javascript
3) the javascript console
4) developer tools on different browsers
5) console.log()
6) javascript demo
7) summary

*/

// try the following sneppets of code in javascript console in your browser:
console.log("hello javascript");

document.body.addEventListener("click", function () {
  var myParent = document.getElementsByTagName("h1")[0];
  var myImage = document.createElement("img");
  myImage.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
  myParent.appendChild(myImage);
  myImage.style.marginLeft = "160px";
});
