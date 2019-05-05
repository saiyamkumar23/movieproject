

function update(e) {
	var x= e.clientX || e.touches[0].clientX
	var y= e.clientY || e.touches[0].clientY

	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)


// document.body.addEventListener('mousemove', function(e) {
// 	var top= e.pageY;
// 	var left= e.pageX;
// 	var torch= document.getElementById("torch");
// 	torch.style.clip= "rect("+(top-200)+"px,"+left+"px,"+top+"px,"+(left-200)+"px)";
// });

