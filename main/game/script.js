
//camera move
var world = document.getElementById("boxDiv");
var x;
var y;


document.addEventListener('mousemove', function(e){

  x = e.clientX;
  y = e.clientY;
  y = -y
  world.style.transform = "translateZ(600px) rotateX(" +y+"deg) rotateY(" +x+"deg)";
});
