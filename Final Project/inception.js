
const joeArea = document.getElementById("joseph");
const joeClip = document.getElementById("joeClip");

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


// JOE CANVAS 
     const canvas = document.getElementById('joeClip');
    const context = canvas.getContext('2d');

      let width;
      let height;

      // get ratio of the resolution in physical pixels to the resolution in CSS pixels
      let pxScale = window.devicePixelRatio;

      let video = document.querySelector('video');

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

        // normalize the coordinate system
        context.scale(pxScale, pxScale);

        // make sure video begins to play (some browsers disregard autoplay attribute)
        video.play();
      }

      function draw() {
        // draw video at original aspect ratio
        context.drawImage(video, 0, 0, 533, 300);

        requestAnimationFrame(draw);
      }

      setup();

      // wait for video to play before drawing to the canvas
      video.addEventListener('play', draw);
