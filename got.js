var c = document.getElementById('canv'), 
    $ = c.getContext("2d");
var w = c.width = window.innerWidth, 
    h = c.height = window.innerHeight;

Snowy();
function Snowy() {
  var snow, arr = [];
  var num = 600, tsc = 1, sp = 1;
  var sc = 1.3, t = 0, mv = 20, min = 1;
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
  go();
  function go(){
    window.requestAnimationFrame(go);
      $.clearRect(0, 0, w, h);
      $.fillStyle = 'hsla(300, 0%, 3%, 0)';
      $.fillRect(0, 0, w, h);
      $.fill();
        for (var i = 0; i < arr.length; ++i) {
          f = arr[i];
          f.t += .05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
          f.y += f.sp;
          f.x += Math.sin(f.t * tsc) * (f.sz * .3);
          if (f.y > h + 50) f.y = -10 - Math.random() * mv;
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      $.moveTo(this.x, this.y);
      $.fillStyle = this.g;
      $.beginPath();
      $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      $.fill();}
  }
}
/*________________________________________*/
window.addEventListener('resize', function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);


lanister = document.getElementsByTagName("IMG")[0];
stark = document.getElementsByTagName("IMG")[1];
targarian = document.getElementsByTagName("IMG")[2];
background= document.getElementsByTagName("BODY")[0];
container= document.getElementById("container");
title= document.getElementById("title");
audio= document.getElementsByTagName('AUDIO')[0];

lanister.addEventListener('click', lan);
stark.addEventListener('click', star);
targarian.addEventListener('click', tar);

function lan(){
  background.style.backgroundImage= 'url(houselan.jpeg)';
  stark.style.display="none";
  targarian.style.display="none";
  lanister.style.display="none";
  title.innerHTML="Welcome to House Lanister";
  title.style.width="350px";
  title.style.marginTop="30px";
  title.style.marginLeft="30px";
  title.style.color="#FFC53E";

  audio.src="lan_song.mp3";
  audio.play();

};
function star(){
  background.style.backgroundImage= 'url(housestark.jpg)';
  lanister.style.display="none";
  targarian.style.display="none";
  stark.style.display="none";
  title.innerHTML="Welcome to House Stark";
  title.style.width="100%";
  title.style.marginTop="30px";
  title.style.marginLeft="30px";
  title.style.color="darkblue";

  audio.src="stark_song.mp3";
  audio.play();

};
function tar(){
  background.style.backgroundImage= 'url(housetar.jpg)';
  stark.style.display="none";
  targarian.style.display="none";
  lanister.style.display="none";
  title.innerHTML="Welcome to House Targaryen";
  title.style.width="350px";
  title.style.marginTop="30px";
  title.style.marginLeft="30px";

  audio.src="targ_song.mp3";
  audio.play();

};
audio.play();
