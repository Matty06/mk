let subtitleText = document.getElementById('subtitle').textContent;
let subtitle = document.getElementById('subtitle');


// 
/*
1. HTML/CSS coder
2. UI/UX designer
3. Instagram content creator
4. Wedding photographer/videomaker
*/

var a = "HTML/CSS coder";
var b = "UI/UX designer";
var c = "Instagram content creator";
var d = "Wedding photographer / videomaker";

function replace(){
  var i = 0;
  switch(i) {
    case 0: 
    var newContent =  subtitleText.replace(subtitleText, "UI/UX designer");
    subtitle.innerHTML = newContent;
    break;
    case 1:
      var newContent =  subtitleText.replace(subtitleText, "ad");
      subtitle.innerHTML = newContent;
      break;
  }

}

setInterval(function(){
    // every 2s
    replace();
    
}, 2000);





