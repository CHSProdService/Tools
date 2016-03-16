javascript: var contentBody = document.querySelector("div[class='center']") || document.querySelector("div[id='wb-cont']") || document.querySelector("main");
var links = new Array();
var counter = 0;
for (var i = 0; i < contentBody.querySelectorAll("a:not([href^='http'])").length; i++) {
   if (contentBody.querySelectorAll("a:not([href^='http'])")[i].href.substring(0, 1) !== "" && contentBody.querySelectorAll("a:not([href^='http'])")[i].href.split("#")[0] !== location.href && contentBody.querySelectorAll("a:not([href^='http'])")[i].href.substring(0, 7) !== "mailto:" && contentBody.querySelectorAll("a:not([href^='http'])")[i].href.substring(0, 11) !== "javascript:" && contentBody.querySelectorAll("a:not([href^='http'])")[i].innerText !== " ") {
      links[counter] = new Array();
      links[counter]["Title"] = contentBody.querySelectorAll("a:not([href^='http'])")[i].innerText;
      links[counter]["URL"] = contentBody.querySelectorAll("a:not([href^='http'])")[i].href;
      counter++;
   }
}
document.write("<table border='1'>");
for (var i = 0; i < links.length; i++) {
   document.write("<tr><td>" + links[i]["URL"] + "</td><td>" + links[i]["Title"] + "</td></tr>");
}
document.write("</table>");