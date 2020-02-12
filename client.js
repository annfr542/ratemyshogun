
function loadView(view=1){
  //document.getElementByClassName("active").className = "";
  document.getElementById("home-button").classList.remove('active');
  document.getElementById("toplist-button").classList.remove('active');
  document.getElementById("quiz-button").classList.remove('active');
  document.getElementById("faq-button").classList.remove('active');

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
    document.getElementById("current_view").innerHTML = document.getElementById("toplist_view").innerHTML;
    document.getElementById("faq-button").classList.add('active');
  }
  else {
    document.getElementById("current_view").innerHTML = document.getElementById("home_view").innerHTML;
    document.getElementById("home-button").classList.add('active');
  }
}
function loadQuizResult(result){

  document.getElementById("current_view").innerHTML = document.getElementById("result_quiz_view").innerHTML;
 
  switch(result) {
    case "bukko":
      document.getElementById("quiz_result").innerHTML = "Bukko";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img classs='profile_img' src='bukko.png' class='contester' style='width:35vw'></img>";
      break;
    case "tomoe":
      document.getElementById("quiz_result").innerHTML = "Tomoe";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img classs='profile_img' src='tomoe.png' class='contester' style='width:35vw'></img>";
      break;
    case "kejsaren":
      document.getElementById("quiz_result").innerHTML = "Kejsaren";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img src='kejsaren.png' class='contester' style='width:35vw'></img>";
      break;
    case "lapsang":
      document.getElementById("quiz_result").innerHTML = "Lapsang";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img src='lapsang.png' class='contester' style='width:35vw'></img>";
      break;
    case "hojo":
      document.getElementById("quiz_result").innerHTML = "Hōjō";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img src='hojo.png' class='contester' style='width:35vw'></img>";
      break;
    case "mentorn":
      document.getElementById("quiz_result").innerHTML = "Mentorn";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img src='mentorn.png' class='contester' style='width:35vw'></img>";
      break;
    case "marco":
      document.getElementById("quiz_result").innerHTML = "Marco Polo";
      document.getElementById("quiz_result_text").innerHTML = "Du är en tönt";
      document.getElementById("quiz_result_img").innerHTML = "<img src='marco.png' class='contester' style='width:35vw'></img>";
      break;
    case "directionen":
      document.getElementById("quiz_result").innerHTML = "Directionen";
      document.getElementById("quiz_result_text").innerHTML = "Sök nästa års direction <a href='https://wiki.studentspex.se/nominera/'>här</a>";
      document.getElementById("quiz_result_img").innerHTML = "<img src='directionen.png' class='contester' style='width:35vw'></img>";
      break;
    
    default:
      // code block
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
