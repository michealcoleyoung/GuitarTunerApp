function playNote(id) {
	var audio = document.getElementById(id);
    if (audio.paused == true) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}



function changeTuning() {
	var val = document.getElementById('tunings').value;

	// stanard tuning	
	if (val == 'standard') {
		document.getElementById('note1').innerHTML = "E";
		document.getElementById('note2').innerHTML = "A";
		document.getElementById('note3').innerHTML = "D";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "B";
		document.getElementById('note6').innerHTML = "E";
	// drop D tuning
	} else if (val == 'dropD') {
		document.getElementById('note1').innerHTML = "D";
		document.getElementById('note2').innerHTML = "A";
		document.getElementById('note3').innerHTML = "D";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "B";
		document.getElementById('note6').innerHTML = "E";
	// open C tuning
	} else if (val == 'openC') {
		document.getElementById('note1').innerHTML = "C";
		document.getElementById('note2').innerHTML = "G";
		document.getElementById('note3').innerHTML = "C";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "C";
		document.getElementById('note6').innerHTML = "E";
	}

}