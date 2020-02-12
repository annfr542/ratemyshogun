
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
    document.getElementById("current_view").innerHTML = document.getElementById("toplist_view").innerHTML;
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
