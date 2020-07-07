// JavaScript for Dog Gallery
function upDate(preview){
	document.getElementById('image').style.backgroundImage="url('"+preview.src+"')";
  	document.getElementById('image').innerHTML=preview.alt;
  	
}

function unDO(){
	document.getElementById('image').style.backgroundImage ="url('')";
 	document.getElementById('image').innerHTML ="Hover over an image below to display the content here.";
}