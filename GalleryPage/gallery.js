//First Canvas
		    
		var canvas1 = document.querySelector("#c1");
		var context1 = canvas1.getContext("2d");
		let image1 = document.getElementById("shutter");
		let video1 = document.getElementById('vid1');
		video1.currentTime = 5;

		

		 function setup1(){
		     const referenceWidth = 600;
		     const referenceHeight = 400;

			    // Set display size (CSS pixels)
			  canvas1.style.width = referenceWidth + 'px';
			  canvas1.style.height = referenceHeight + 'px'; 

			      // Set actual, device pixel size (scaled for extra pixel density)
			      let scale = window.devicePixelRatio;
			      console.log(scale);
			      canvas1.width = referenceWidth * scale;
			      canvas1.height = referenceHeight * scale;

			      // Normalize coordinate system to use CSS pixels
			      context1.scale(scale, scale);

			       video1.play();
		    }

		    function img1(){const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  				context1.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        		context1.drawImage(image1, 0, 0, 600, 400);
        		requestAnimationFrame(img1);
        	};

        		image1.addEventListener('load', img1);
		 		


		 

		 function draw1() {
		 		const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  		context1.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        context1.drawImage(video1, 0, 0, 600, 400);

       

  			// recursive function call
  		requestAnimationFrame(draw1);

    	}
    	setup1();

    	c1.addEventListener('mouseover', draw1);
    	c1.addEventListener('mouseout', img1);


			
//Second Canvas
		var canvas2 = document.querySelector("#c2");
		var context2 = canvas2.getContext("2d");
		let image2 = document.getElementById("got_img");
		let video2 = document.getElementById('vid2');
		video2.currentTime = 26;

		

		 function setup2(){
		     const referenceWidth = 600;
		     const referenceHeight = 400;

			    // Set display size (CSS pixels)
			  canvas2.style.width = referenceWidth + 'px';
			  canvas2.style.height = referenceHeight + 'px'; 

			      // Set actual, device pixel size (scaled for extra pixel density)
			      let scale = window.devicePixelRatio;
			      console.log(scale);
			      canvas2.width = referenceWidth * scale;
			      canvas2.height = referenceHeight * scale;

			      // Normalize coordinate system to use CSS pixels
			      context2.scale(scale, scale);

			      video2.play();
		    }
		 
		//still image 2
		 function img2(){const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  				context2.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        		context2.drawImage(image2, 0, 0, 600, 400);
        	requestAnimationFrame(img2);
        };

        image2.addEventListener('load', img2);

		 function draw2() {
		 		const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  		context2.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        context2.drawImage(video2, 0, 0, 600, 400);

       

  			// recursive function call
  		requestAnimationFrame(draw2);

    	}
    	setup2();

    	c2.addEventListener('mouseover', draw2);
    	c2.addEventListener('mouseout', img2);

 

    //Third Canvas
    	var canvas3 = document.querySelector("#c3");
		var context3 = canvas3.getContext("2d");
		let image3 = document.getElementById('inception_img')
		let video3 = document.getElementById('vid3');
		video3.currentTime = 7;

		

		 function setup3(){
		     const referenceWidth = 600;
		     const referenceHeight = 400;

			    // Set display size (CSS pixels)
			  canvas3.style.width = referenceWidth + 'px';
			  canvas3.style.height = referenceHeight + 'px'; 

			      // Set actual, device pixel size (scaled for extra pixel density)
			      let scale = window.devicePixelRatio;
			      console.log(scale);
			      canvas3.width = referenceWidth * scale;
			      canvas3.height = referenceHeight * scale;

			      // Normalize coordinate system to use CSS pixels
			      context3.scale(scale, scale);

			      video3.play();
		    }

		    function img3(){const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  				context3.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        		context3.drawImage(image3, 0, 0, 600, 400);
        	requestAnimationFrame(img3);
        };


		 image3.addEventListener('load', img3);

		 function draw3() {
		 		const referenceWidth = 600;
		  		const referenceHeight = 400;
		 // clear canvas
  		context3.clearRect(0, 0, referenceWidth, referenceHeight);

        // draw image to the canvas (image, x, y, width, height)
        context3.drawImage(video3, 0, 0, 600, 400);

        
  		requestAnimationFrame(draw3);

    	}
    	setup3();

    	c3.addEventListener('mouseover', draw3);
    	c3.addEventListener('mouseout', img3);