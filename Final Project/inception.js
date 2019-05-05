
const joeArea = document.getElementById("joseph");
const joeClip = document.getElementById("joeClip");

const tomArea = document.getElementById("tom");
const tomClip = document.getElementById("tomClip");

const leoArea = document.getElementById("leo");
const leoClip = document.getElementById("leoClip");

//JOE CLIP PLAY 
function playJoeClip(event) {
    console.log("hello");
    joeClip.style.display = "block"; 
    event.target.addEventListener('mouseout', stopJoeClip, false);
  
  event.stopPropagation();
}

function stopJoeClip() {
joeClip.style.display = "none";
  
}

joeArea.addEventListener('mouseover', playJoeClip, false);


//TOM CLIP PLAY 
function playTomClip(event) {
    console.log("hello2");
    tomClip.style.display = "block"; 
    event.target.addEventListener('mouseout', stopTomClip, false);
  
  event.stopPropagation();
}

function stopTomClip() {
tomClip.style.display = "none";
  
}

tomArea.addEventListener('mouseover',playTomClip,false);



// LEO CLIP PLAY 
function playLeoClip(event) {
    console.log("hello3");
    leoClip.style.display = "block"; 
    event.target.addEventListener('mouseout', stopLeoClip, false);
  
  event.stopPropagation();
}

function stopLeoClip() {
leoClip.style.display = "none";
  
}

leoArea.addEventListener('mouseover', playLeoClip, false);


// JOE CANVAS 
     const canvas= document.getElementById('joeClip');
    const context = canvas.getContext('2d');

      let width;
      let height;

      // get ratio of the resolution in physical pixels to the resolution in CSS pixels
      let pxScale = window.devicePixelRatio;

      let video = document.querySelectorAll('video');

      function setup() {
        // fixed canvas size
        width = canvas.width;
        height = canvas.height;

        // set the CSS display size
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        // set the number of display pixels, scaled for device resolution
        canvas.width = width * pxScale;
        canvas.height = height * pxScale;

        canvas.style.left= "90px";
        canvas.style.top= "50px";
        canvas.style.position= "absolute";

        // normalize the coordinate system
        context.scale(pxScale, pxScale);

        // make sure video begins to play (some browsers disregard autoplay attribute)
        video[0].play();
      }

      function draw() {
        // draw video at original aspect ratio
        context.drawImage(video[0], 0, 0, 533, 300);

        requestAnimationFrame(draw);
      }

      setup();

      // wait for video to play before drawing to the canvas
      video[0].addEventListener('play', draw);


//TOM CANVAS  
const canvas2= document.getElementById('tomClip');
    const context2 = canvas2.getContext('2d');

      let width2;
      let height2;

      // get ratio of the resolution in physical pixels to the resolution in CSS pixels
      let pxScale2 = window.devicePixelRatio;

      function setup2() {
        // fixed canvas size
        width2 = canvas2.width;
        height2 = canvas2.height;

        // set the CSS display size
        canvas2.style.width = width2 + 'px';
        canvas2.style.height = height2 + 'px';

        canvas2.style.left= "240px";
        canvas2.style.top= "50px";
        canvas2.style.position= "absolute";

        // set the number of display pixels, scaled for device resolution
        canvas2.width = width2 * pxScale2;
        canvas2.height = height2 * pxScale2;

        // normalize the coordinate system
        context2.scale(pxScale2, pxScale2);

        // make sure video begins to play (some browsers disregard autoplay attribute)
        video[1].play();
      }

      function draw2() {
        // draw video at original aspect ratio
        context2.drawImage(video[1], 0, 0, 533, 300);

        requestAnimationFrame(draw2);
      }

      setup2();

      // wait for video to play before drawing to the canvas
      video[1].addEventListener('play', draw2);


//LEO CANVAS  
const canvas3= document.getElementById('leoClip');
    const context3 = canvas3.getContext('2d');

      let width3;
      let height3;

      // get ratio of the resolution in physical pixels to the resolution in CSS pixels
      let pxScale3 = window.devicePixelRatio;

      function setup3() {
        // fixed canvas size
        width3 = canvas3.width;
        height3 = canvas3.height;

        // set the CSS display size
        canvas3.style.width = width3 + 'px';
        canvas3.style.height = height3 + 'px';

        // set the number of display pixels, scaled for device resolution
        canvas3.width = width3 * pxScale3;
        canvas3.height = height3 * pxScale3;

        canvas3.style.left= "500px";
        canvas3.style.top= "50px";
        canvas3.style.position= "absolute";


        // normalize the coordinate system
        context3.scale(pxScale3, pxScale3);

        // make sure video begins to play (some browsers disregard autoplay attribute)
        video[2].play();
      }

      function draw3() {
        // draw video at original aspect ratio
        context3.drawImage(video[2], 0, 0, 533, 300);

        requestAnimationFrame(draw3);
      }

      setup3();

      // wait for video to play before drawing to the canvas
      video[2].addEventListener('play', draw3);
