let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloudLogoImg = document.getElementById("cloud-logo-img");

//global variables
let circX = 200;
let circSize = 20;
let cloud1 = 150;
let cloud2 = 175;
let circle = 300;
let rectred= 255;
let rectgreen = 0;



requestAnimationFrame(loop);
function loop() {
    cloud1++;
    cloud2--;
    circle--;
    circSize+= 0.1;
    rectgreen++;
  //Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 300);

  //circles
  ctx.linewidth = 5;
  ctx.fillStyle = "rgb(" + rectred + "," + rectgreen +", 0)";
  ctx.beginPath();
  ctx.arc(circX, circle,circSize, 0, 2 * Math.PI);
  ctx.fill();

  //Draw images
  ctx.drawImage(cloudLogoImg, cloud1, 100);
  ctx.drawImage(cloudLogoImg, cloud2, 90);

  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 300);


  requestAnimationFrame(loop);
}
