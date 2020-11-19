document.addEventListener("keydown", event_keydown); 

function event_keydown(e){
	// alert(e.key);
	// document.onkeydown=(e)=>alert(e.key);	
	switch(e.key){
		case "r":
			if (is_on("red")){return;}
			document.removeEventListener("keydown", event_keydown); 
			spegnere("green");
			accendere("yellow");
			setTimeout(accendere,1000,"red");
			setTimeout(spegnere,1000,"yellow");
			setTimeout(re_bind,1200);	
			break;
		case "v":
			if (is_on("green")){return;}
			document.removeEventListener("keydown", event_keydown); 		
			spegnere("red");
			accendere("yellow");
			setTimeout(accendere, 1000,"green");
			setTimeout(spegnere,1000,"yellow");
			setTimeout(re_bind,1200);	
			break;			
	}
	
}

function is_on(id){
	let elem=document.getElementById(id);
	return elem.classList.contains('on');
}

function accendere(id){
	let elem=document.getElementById(id);
	elem.classList.add('on');
}
function spegnere(id){
	let elem=document.getElementById(id);
	elem.classList.remove('on');	
}
function re_bind(){
	document.addEventListener("keydown", event_keydown); 
}





