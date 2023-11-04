function hideSide(){
  if(innerWidth > 600){
    document.querySelector(".sidebar").style.right = "calc(-20vw - 10px)";
  }else{
    document.querySelector(".sidebar").style.right = "calc(-100vw - 10px)";
  }
}
function showSide(){
  document.querySelector(".sidebar").style.right = "0";
}
var theme = "dark";
if(localStorage.getItem("ntheme") === null){
  localStorage.setItem("ntheme", "dark");
}else{
  theme = localStorage.getItem("ntheme");
}
var items = document.querySelectorAll("*");
for(var i = 0; i < items.length; i++){
  if(items[i].classList.contains("top")){
    items[i].classList.add("light-top");
    items[i].classList.add("dark-top");
    items[i].classList.toggle(theme+"-top");
  }else if(items[i].classList.contains("bottom")){
    items[i].classList.add("light-bottom");
    items[i].classList.add("dark-bottom");
    items[i].classList.toggle(theme+"-bottom");
  }
}
document.querySelector(".switch > input").onclick = function(){
  var items = document.querySelectorAll("*");
  for(var i = 0; i < items.length; i++){
    if(items[i].classList.contains("top")){
      items[i].classList.toggle("dark-top");
      items[i].classList.toggle("light-top");
    }else if(items[i].classList.contains("bottom")){
      items[i].classList.toggle("dark-bottom");
      items[i].classList.toggle("light-bottom");
    }
  }
  if(theme === "dark"){
    localStorage.setItem("ntheme", "light");
    theme = "light";
  }else{
    localStorage.setItem("ntheme", "dark");
    theme = "dark";
  }
}
hideSide();
window.onload = function(){
  document.querySelector(".sidebar").style.transition = "1s";
}
