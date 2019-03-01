// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")


// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("orange_slot.PNG")){
		el.src = "lemon_slot.PNG";
	} else if (el.src.match("lemon_slot.PNG")){
		el.src = "cherry_slot.PNG";
	} else if (el.src.match("cherry_slot.PNG")){
		el.src = "lemon_slot.PNG";
	} else {
		// do nothing
	}
}

function nextImage2(el){
	if (el.src.match("lemon_slot.PNG")){
		el.src = "bar_slot.PNG";
	} else if (el.src.match("bar_slot.PNG")){
		el.src = "cherry_slot.PNG";
	} else if (el.src.match("cherry_slot.PNG")){
		el.src = "orange_slot.PNG";
	} else if (el.src.match("orange_slot.PNG")){
		el.src = "lemon_slot.PNG";
	} else {
		// do nothing
	}
}

function nextImage3(el){
	if (el.src.match("orange_slot.PNG")){
		el.src = "lemon_slot.PNG";
	} else if (el.src.match("lemon_slot.PNG")){
		el.src = "cherry_slot.PNG";
	} else if (el.src.match("cherry_slot.PNG")){
		el.src = "orange_slot.PNG";
	} else {
		// do nothing
	}
}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
	



function doStuff(el){
	if (a.src.match("cherry_slot.PNG") && b.src.match("cherry_slot.PNG") && c.src.match("cherry_slot.PNG")){
		document.getElementById('sound').play();
		console.log("YAY!");
	} else{
		//I want to thank Koby for the code that made this possible.
		//i wish this function would work when all lights are yellow, or all are red...
	}
}