
function loadView(view=1){
  //document.getElementByClassName("active").className = "";
  document.getElementById("home-button").classList.remove('active');
  document.getElementById("toplist-button").classList.remove('active');
  document.getElementById("quiz-button").classList.remove('active');
  //document.getElementById("faq-button").classList.remove('active');

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
      document.getElementById("quiz_result_text").innerHTML = "Du är ambitiös och listig. Du jobbar för det som är bäst för spexet och bryr dig inte så mycket om någon annan.";
      document.getElementById("quiz_result_img").innerHTML = "<img classs='profile_img' src='Bukko.png' class='contester' style='width:35vw'></img>";
      break;
    case "tomoe":
      document.getElementById("quiz_result").innerHTML = "Tomoe";
      document.getElementById("quiz_result_text").innerHTML = "Du tror att med rätt kunskap klarar man allt. Du håller dig till regler och går aldrig upp på scen med skorna på.";
      document.getElementById("quiz_result_img").innerHTML = "<img classs='profile_img' src='Tomoe.png' class='contester' style='width:35vw'></img>";
      break;
    case "kejsaren":
      document.getElementById("quiz_result").innerHTML = "Kejsaren";
      document.getElementById("quiz_result_text").innerHTML = "Du tycker självklart pyroteknik är ett spex viktigaste komponent. När du sitter i publiken ropar du alltid omstart så kejsaren får elda lite till.";
      document.getElementById("quiz_result_img").innerHTML = "<img src='Kejsaren.png' class='contester' style='width:35vw'></img>";
      break;
    case "lapsang":
      document.getElementById("quiz_result").innerHTML = "Lapsang";
      document.getElementById("quiz_result_text").innerHTML = "Du tror på din tefilosofi om att det finns en perfekt tekopp för alla. Nere i logen älskar du KM och hjälper gärna dem koka tevatten.";
      document.getElementById("quiz_result_img").innerHTML = "<img src='Lapsang.png' class='contester' style='width:35vw'></img>";
      break;
    case "hojo":
      document.getElementById("quiz_result").innerHTML = "Hōjō";
      document.getElementById("quiz_result_text").innerHTML = "I början var du lite orolig för din plats i spexet men nu vet du vad du går för och är redo att bli din gruppledares högra hand. ";
      document.getElementById("quiz_result_img").innerHTML = "<img src='Hojo.png' class='contester' style='width:35vw'></img>";
      break;
    case "mentorn":
      document.getElementById("quiz_result").innerHTML = "Mentorn";
      document.getElementById("quiz_result_text").innerHTML = "Saker var bättre förr.. Alltså tycker du det är väldigt viktigt att ofta berätta om hur saker gjordes när du började spexa, typ på stenåldern.";
      document.getElementById("quiz_result_img").innerHTML = "<img src='Mentorn.png' class='contester' style='width:35vw'></img>";
      break;
    case "marco":
      document.getElementById("quiz_result").innerHTML = "Marco Polo";
      document.getElementById("quiz_result_text").innerHTML = "Du är en fantastisk försäljare som vet att alla problem kan lösas med hjälp av pengar. Du har övertygat alla dina vänner om att kolla på spexet och du tycker att PR nog snart borde upprätta en staty i din ära som tack.";
      document.getElementById("quiz_result_img").innerHTML = "<img src='MarcoPolo.png' class='contester' style='width:35vw'></img>";
      break;
    case "directionen":
      document.getElementById("quiz_result").innerHTML = "Directionen";
      document.getElementById("quiz_result_text").innerHTML = "Du är en småknasig typ som litar på dina medspexare och vet att alla problem löser sig. <br> Nu är du redo att ta klivet, sök direction21 <a href='https://wiki.studentspex.se/nominera/'>här</a>";
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

  html = '<div class="comment"><div class="comment_image"><img src=' + img + ' class="commenter"></div><div class="comment_author">'+character +'</div><div class="comment_text">'+text+'</div></div>'

  document.getElementById("comments").innerHTML += html;
}

