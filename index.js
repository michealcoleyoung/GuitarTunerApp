// Once a tuning is selected from the drop down menu
// each method here will switch out the corresponding audio for that tuning
class Tunings { 
	standard() {
		var note1 = document.getElementById('E');
		var note2 = document.getElementById('A');
		var note3 = document.getElementById('D');
		var note4 = document.getElementById('G');
		var note5 = document.getElementById('B');
		var note6 = document.getElementById('E-1');

			note1.src = "Audio/tunings/Standard/Standard E.wav";
			note2.src = "Audio/tunings/Standard/Standard A.wav";
			note3.src = "Audio/tunings/Standard/Standard D.wav";
			note4.src = "Audio/tunings/Standard/Standard G.wav";
			note5.src = "Audio/tunings/Standard/Standard B.wav";
			note6.src = "Audio/tunings/Standard/Standard E-1.wav";

			note1.load()
			note2.load()
			note3.load()
			note4.load()
			note5.load()
			note6.load()
	}
	dropD() {
		var note1 = document.getElementById('E');
		var note2 = document.getElementById('A');
		var note3 = document.getElementById('D');
		var note4 = document.getElementById('G');
		var note5 = document.getElementById('B');
		var note6 = document.getElementById('E-1');

			note1.src = "Audio/tunings/Standard/Standard D.wav";
			note2.src = "Audio/tunings/Standard/Standard A.wav";
			note3.src = "Audio/tunings/Standard/Standard D.wav";
			note4.src = "Audio/tunings/Standard/Standard E-1.wav";
			note5.src = "Audio/tunings/Standard/Standard G.wav";
			note6.src = "Audio/tunings/Standard/Standard B.wav";

			note1.load()
			note2.load()
			note3.load()
			note4.load()
			note5.load()
			note6.load()
	}
	openC() {
		var note1 = document.getElementById('E');
		var note2 = document.getElementById('A');
		var note3 = document.getElementById('D');
		var note4 = document.getElementById('G');
		var note5 = document.getElementById('B');
		var note6 = document.getElementById('E-1');

			note1.src = "Audio/tunings/Standard/Standard D.wav";
			note2.src = "Audio/tunings/Standard/Standard D.wav";
			note3.src = "Audio/tunings/Standard/Standard D.wav";
			note4.src = "Audio/tunings/Standard/Standard D.wav";
			note5.src = "Audio/tunings/Standard/Standard D.wav";
			note6.src = "Audio/tunings/Standard/Standard E-1.wav";

			note1.load()
			note2.load()
			note3.load()
			note4.load()
			note5.load()
			note6.load()
	}
	// If note is being played while someone selects a new tuning
	// this function will clear the active note or notes being played
	clearNotesPlayed() {
		var notes = document.getElementsByClassName('notes');
		for(var note = 0; note < notes.length; note++) {
			notes[note].style.border = '4px solid orange';
		}
	}
}

var tunings = new Tunings() // creates instance of the class

function showNote(id) {
	var element = document.getElementById(id);
	element.classList.toggle('notePlayed');
}

function playNote(id) {
	// play and pause
	var audio = document.getElementById(id);
    if (audio.paused == true) {
        audio.play();
 
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}


/*
function playNote(id) {
	// play and pause
	// shows active notes being played
	var audio = document.getElementById(id);
    if (audio.paused == true) {
    	var notes = document.getElementsByClassName('notes');
    	for(var note = 0; note < notes.length; note++) {
    		notes[note].style.border = '4px solid red';
    		console.log(document.activeElement.tagName)
    	}
        audio.play();
 
    }else{
    	var notes = document.getElementsByClassName('notes');
    	for(var note = 0; note < notes.length; note++) {
    		notes[note].style.border = '4px solid orange';
    		console.log(document.activeElement.tagName)
    	}
        audio.pause();
        audio.currentTime = 0

    }
}
*/

function changeTuning() {
	// Changes the letters of each button according to what tuning is selected

	var val = document.getElementById('tunings').value;
	// stanard tuning	
	if (val == 'standard') {
		tunings.standard();
		tunings.clearNotesPlayed();
		document.getElementById('note1').innerHTML = "E";
		document.getElementById('note2').innerHTML = "A";
		document.getElementById('note3').innerHTML = "D";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "B";
		document.getElementById('note6').innerHTML = "E";
	// drop D tuning
	} else if (val == 'dropD') {
		tunings.dropD();
		tunings.clearNotesPlayed();
		document.getElementById('note1').innerHTML = "D";
		document.getElementById('note2').innerHTML = "A";
		document.getElementById('note3').innerHTML = "D";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "B";
		document.getElementById('note6').innerHTML = "E";
	// open C tuning
	} else if (val == 'openC') {
		tunings.openC();
		tunings.clearNotesPlayed();
		document.getElementById('note1').innerHTML = "C";
		document.getElementById('note2').innerHTML = "G";
		document.getElementById('note3').innerHTML = "C";
		document.getElementById('note4').innerHTML = "G";
		document.getElementById('note5').innerHTML = "C";
		document.getElementById('note6').innerHTML = "E";
	}

}