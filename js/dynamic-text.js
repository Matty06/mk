let subtitleText = document.getElementById('subtitle').textContent;
let subtitle = document.getElementById('subtitle');


var i = 0;

function replace(){

  switch(i) {
    case 0: 
    var newContent =  subtitleText.replace(subtitleText, "HTML/CSS coder");
    subtitle.innerHTML = newContent;
    break;

    case 1: 
    var newContent =  subtitleText.replace(subtitleText, "UI/UX designer");
    subtitle.innerHTML = newContent;
    break;

    case 2:
      var newContent =  subtitleText.replace(subtitleText, "Instagram content creator");
      subtitle.innerHTML = newContent;
      break;

    case 3:
      var newContent =  subtitleText.replace(subtitleText, "Wedding photographer / videomaker");
      subtitle.innerHTML = newContent;
      break;
  }

}

setInterval(function(){
    // every 2s
    replace();
    i++;
    if (i > 3) {
      i = 0;
    }
}, 2000);





