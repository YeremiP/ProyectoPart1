let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let moon = document.getElementById("moon");
let road = document.getElementById("road");

window.addEventListener('scroll', function () {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + 'px';
  moon.style.left = value * 0.5 + 'px';
  mountain.style.top = value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
})