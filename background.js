var myDocument

console.log("Hello World!");
$(document).ready(function(){
console.log("Hello World! By jquery");
});

$(function(){
    console.log("Hello World! By jquery 2");
});

window.onload = function(){
    chrome.tabs.
    query({}, function(tabs) {
        myDocument = tabs[0].url;
        console.log("myDoc"+myDocument)
        });
}

$("*")
    .filter("*:contains('a')")
    .ready(function(){
        console.log("Hello World! By jquery");
    });

console.log("a count" + $(":contains('a')").length)
