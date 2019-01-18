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

			note1.src = "Audio/tunings/Standard/Standard_6.wav";
			note2.src = "Audio/tunings/Standard/Standard_5.wav";
			note3.src = "Audio/tunings/Standard/Standard_4.wav";
			note4.src = "Audio/tunings/Standard/Standard_3.wav";
			note5.src = "Audio/tunings/Standard/Standard_2.wav";
			note6.src = "Audio/tunings/Standard/Standard_1.wav";

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

			note1.src = "Audio/tunings/Drop D/Drop_D_6.wav";
			note2.src = "Audio/tunings/Drop D/Drop_D_5.wav";
			note3.src = "Audio/tunings/Drop D/Drop_D_4.wav";
			note4.src = "Audio/tunings/Drop D/Drop_D_3.wav";
			note5.src = "Audio/tunings/Drop D/Drop_D_2.wav";
			note6.src = "Audio/tunings/Drop D/Drop_D_1.wav";

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

			note1.src = "Audio/tunings/Open C/Open_C_6.wav";
			note2.src = "Audio/tunings/Open C/Open_C_5.wav";
			note3.src = "Audio/tunings/Open C/Open_C_4.wav";
			note4.src = "Audio/tunings/Open C/Open_C_3.wav";
			note5.src = "Audio/tunings/Open C/Open_C_2.wav";
			note6.src = "Audio/tunings/Open C/Open_C_1.wav";

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
			if(notes[note].classList.contains('notePlayed')) {
				notes[note].classList.toggle('notePlayed');
			}
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