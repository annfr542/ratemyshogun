
function loadView(view=1){
  //document.getElementByClassName("active").className = "";
  if (view == 1){
    document.getElementById("current_view").innerHTML = document.getElementById("home_view").innerHTML;
    document.getElementById("home-button").classList.add('active');
  }
  else if (view == 2){
    document.getElementById("current_view").innerHTML = document.getElementById("toplist_view").innerHTML;
    document.getElementById("toplist-button").classList.add('active');
  }
  else if (view == 3){
    document.getElementById("current_view").innerHTML = document.getElementById("quiz_view").innerHTML;
    document.getElementById("quiz-button").classList.add('active');
  }
  else if (view == 4){
    document.getElementById("current_view").innerHTML = document.getElementById("faq_view").innerHTML;
    document.getElementById("faq-button").classList.add('active');
  }
  else {
    document.getElementById("current_view").innerHTML = document.getElementById("home_view").innerHTML;
    document.getElementById("home-button").classList.add('active');
  }
}
window.onload=loadView;

function test(){
  window.alert("TEST_ALERT");
}


function post_comment(form){
  character = form.character.value;
  text = form.comment.value;
  img = character + ".png";

  html = "<div class=\"comment\">" +
  "<div class=\"comment_image\">" +
  "<img src=" + img + " class=\"commenter\">" +
  "</div>" + "<div class=\"comment_text\">" +
  "<p><b>" + String(character) + "</b><br>" +
  "<em>" + String(text) + "</em></p>" + "</div>" + "</div>";

  document.getElementById("comments").innerHTML += html;
}
