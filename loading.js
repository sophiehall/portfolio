// after 3s do something
setTimeout(function (){
  document.querySelector("div.loading").classList.add("hidden")
}, 3000)

// Grid loading
var list = document.getElementsByClassName("display");

var delay = 0;

for (var i = 0; i < list.length; ++i) {
  list[i].style.animationDelay = delay + 's';
  delay += 0.1;
}
