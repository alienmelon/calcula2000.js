/*
    _____________________
   |  _________________  |
   | | CALCULA2000.JS  | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 1 | n | 3 | | + | |
   | |___|___|___| |___| |
   | | 7 | 6 | 5 | | - | |
   | |___|___|___| |___| |
   | | 0 | 2 | q | | ? | |
   | |___|___|___| |___| |
   | | . | x | = | | ! | |
   | |___|___|___| |___| |
   |_____________________|

Never again let your website be calculatorless with CALCULA2000.js! (JS Edition)
*/


function init_calcula2000(){
	
	//arrays
	//frog inspired names
	var arr_character_names = ["Abs", "Agnus", "Al-gea", "Amphibulus", "Scrubby", "Crusty", "Bouncer", "Bouncy", "Blinky", "Booboo the Bloatoad", "Bobo", "Booboo", "Bob", "Boo", "Boogy", "Bubba", "Bubble", "Buds", "Buddy", "Buggy", "Bumpy", "Chicky", "Chops", "Chubby", "Fats", "Fatso", "Chubber", "Flubber", "Chubbs", "Chunk", "Chunky", "Chunko", "Copper", "Conan", "Cool Frog", "Croaker", "Croaks", "Croaky", "Crunchy", "Cups", "Curmet", "Kermits", "Darty", "Dars", "Doc", "Dots", "Frogzilla", "Peppers", "Ducky", "Ducks", "Dumbell", "Dumpy", "Dumby", "Edgar", "Mimi", "Fatso", "Fatty", "Fatter Frog", "Fattest", "Fattest Frog", "Fatty Arbuckles", "Fearless Froglet", "Fergie", "Fibby", "Fiddles", "Fillmore", "Filbert", "Ferdinand", "Figaro", "Flibbit", "Flips", "Floatie", "Flubbers", "Francis", "Freaky Frog", "Freaky", "Froggens", "Froggins", "Froglestew", "Freckle", "Fugie", "Glossy", "Gobble", "Gobbles", "Gomez", "Gooey", "Gordon", "Gorf", "Gorf", "Gordito", "Greenie", "Gregan", "Grinner", "Grog", "Guacamole", "Guacky", "Gub-gub", "Gumball", "Gus", "Gus Gus", "Hogie", "Hoogie", "Hoogy", "Howie", "Hecktor", "Gerby", "Herby", "Hippyfrog", "Hopkins", "Hopper", "Hoppy", "Hoppity", "Hoppity-Hop", "Hop-Hop", "Hopps-alot", "Hopson", "Hopston", "Hot Frog", "Hot-Toad", "Hugo-a-go-go", "Hugo", "Ichabod", "Iggy", "Ivan", "Jabba", "Jabba the Jumpy", "Jumpy", "Jeremiah", "Jimmy da toad", "Joey", "Jorg", "Yurg", "Jumpiter", "Kermit", "Kermit Klein", "Ketchup", "Kilroy", "Kirby", "King Kirby", "Klack", "Kokomo", "Krebbit", "Kroppy", "Leaper", "Leapy", "Leafy", "Legs", "Leroy", "Little Guy", "Leggy", "Louie", "Lumpy", "Lumps", "Man-o Frog", "Marina", "Mark McGwire", "Max", "Maxter", "Mermin", "Merms", "Germs", "Mr.Croak", "Mr. Frog", "Mr. Fribble", "Mr. Skinny", "Mr. Mouth", "Mister Mac", "Mr. Red Bottom", "Mr. Moco", "Mog", "Moe Moe", "Munky", "Murdock", "Nanotoad", "Noodles", "Nozy", "Frogy-Wan", "Patches", "Peabody", "Peanut", "Peeps", "Squeeks", "Pekkle", "Pickles", "Pickle", "Floyd", "Pip", "Phyto-P", "Plop", "Plopps", "Po", "Poegy", "Pogo", "Pookee", "Crackers", "Popcorn", "Prince Soggy Bottom", "Puddles", "Pug Pug", "Punkins", "Pudgetta", "Quigley", "Quiggle", "Quibbit", "Quigleys", "Quiggles", "Giggles", "Quiglly", "Raisin", "Ruperts", "Crumbs", "Shamrockfrog", "Sir Croaks alot", "Skippy", "Skippydippy", "Skittles", "Slappy", "Slims", "Slimmy", "Slinky", "Slippy", "Slick", "Slub", "Sluggs", "Sluggo", "Soupy", "Smeaglet", "Smiles", "Smiley", "Springer", "Sprocket", "Sprog", "Sproing", "Spud", "Spuds", "Squiggly", "Squirt", "Sticky", "Stinky", "Stomper", "Stone Cold", "Stoney", "Stubby", "Stumper", "Stud", "Studs", "Squishy", "Squeeky", "Squirmy", "Squirms", "Tater", "Tomato", "Taters", "Tamoto", "El Tamoto", "Tapioca", "Tiggle", "Tiggles", "Tibbir", "Ribbits", "Tommy the Toad", "Tricky", "Tubby", "Tubs", "Tuffy", "Twiggles", "Watermelonbaby", "Webby", "Webs", "Wet Willy", "Wembley", "Wiggles", "Giggles", "Winky", "Wiggletins", "Whopper", "Xorcon", "Yggorf", "Zenon", "Zippity", "Zippy", "Zips", "Zookey", "Zucchini"];
	//random output
	var arr_text_calculator_output = ["You're a match!", "It's a match!", "It's a match!", "Perfect match!", "Yes!", "Soul mate!", "It's a boy!", "It's a girl!", "It's a tie!", "Soulmate!", "No good.", "It looks bad.", "Looks bad.", "Looks good!", "It looks good.", "No!", "Perfect match!", "You're a match!", "Tie!", "I don't know.", "I have no idea.", "I honestly don't know.", "I have no clue.", "No clue.", "No idea.", "I do not know.", "No idea.", "Math is hard.", "Math is too hard.", "Maybe not.", "Sorry I don't know.", "I have no idea.", "Out of service.", "We don't know.", "No clue!", "Nope.", "No reply.", "Perfect match!", "Perfect match.", "Force quit!!"];
	
	//audio
	var arr_snd_calculator_click = ["AUD_CALCULATOR_CLICK_01.mp3", "AUD_CALCULATOR_CLICK_02.mp3", "AUD_CALCULATOR_CLICK_03.mp3", "AUD_CALCULATOR_CLICK_04.mp3", "AUD_CALCULATOR_CLICK_05.mp3", "AUD_CALCULATOR_CLICK_06.mp3", "AUD_CALCULATOR_CLICK_07.mp3", "AUD_CALCULATOR_CLICK_08.mp3", "AUD_CALCULATOR_CLICK_09.mp3", "AUD_CALCULATOR_CLICK_10.mp3", "AUD_CALCULATOR_CLICK_11.mp3", "AUD_CALCULATOR_CLICK_12.mp3", "AUD_CALCULATOR_CLICK_13.mp3", "AUD_CALCULATOR_CLICK_14.mp3", "AUD_CALCULATOR_CLICK_15.mp3", "AUD_CALCULATOR_CLICK_16.mp3", "AUD_CALCULATOR_CLICK_17.mp3", "AUD_CALCULATOR_CLICK_18.mp3", "AUD_CALCULATOR_CLICK_19.mp3", "AUD_CALCULATOR_CLICK_20.mp3", "AUD_CALCULATOR_CLICK_21.mp3", "AUD_CALCULATOR_CLICK_22.mp3", "AUD_CALCULATOR_CLICK_23.mp3", "AUD_CALCULATOR_CLICK_24.mp3", "AUD_CALCULATOR_CLICK_25.mp3", "AUD_CALCULATOR_CLICK_26.mp3", "AUD_CALCULATOR_CLICK_27.mp3", "AUD_CALCULATOR_CLICK_28.mp3", "AUD_CALCULATOR_CLICK_29.mp3", "AUD_CALCULATOR_CLICK_30.mp3", "AUD_CALCULATOR_CLICK_31.mp3", "AUD_CALCULATOR_CLICK_32.mp3", "AUD_CALCULATOR_CLICK_33.mp3"];
	var arr_snd_calculator_tadas = ["AUD_CALCULATOR_TADACLICKS_01.mp3", "AUD_CALCULATOR_TADACLICKS_02.mp3", "AUD_CALCULATOR_TADACLICKS_03.mp3", "AUD_CALCULATOR_TADACLICKS_04.mp3", "AUD_CALCULATOR_TADACLICKS_05.mp3"];
	//there is only one in this array. it is very lonely. don't try to help it. this is meant to be. -_-;
	var arr_snd_tada = ["AUD_CALCULATOR_TADA_01.mp3"];
	
	var snd_sfx;//sounds
	
	//paths
	var str_image_path = "calcula2000jsedition/images/";
	var str_audio_path = "calcula2000jsedition/audio/";
	
	//returned value sometimes
	var str_calculator = "0";
	
	//top row of buttons
	var num_btn_y_row1 = 90;
	//second row
	var num_btn_y_row2 = 140;
	//third row
	var num_btn_y_row3 = 190;
	//last row
	var num_btn_y_row4 = 240;
	
	//append fonts
	var font_fixedsys = document.createElement("style");
	font_fixedsys.appendChild(document.createTextNode("\
	@font-face {\
	    font-family: '" + 'fixedsys_excelsior_3' + "';\
		src: url('" + 'calcula2000jsedition/font_fixedsys/fsex300-webfont.eot?#iefix' + "') format('embedded-opentype'),\
			 url('" + 'calcula2000jsedition/font_fixedsys/fsex300-webfont.woff' + "') format('woff'),\
		     url('" + 'calcula2000jsedition/font_fixedsys/fsex300-webfont.ttf' + "') format('truetype'),\
			 url('" + 'calcula2000jsedition/font_fixedsys/fsex300-webfont.svg#fixedsys_excelsior_3.01Rg' + "') format('svg');\
		font-weight: normal;\
		font-style: normal;\
	}\
	"));
	document.head.appendChild(font_fixedsys);
	//
	
	//riveting audio feedback for calculator
	function play_calcuaudio(arr){
		snd_sfx = new Audio(str_audio_path + arr[Math.ceil(Math.random()*arr.length)-1]);
		snd_sfx.play();
	}
	
	function snd_calculator_click(){
		play_calcuaudio(arr_snd_calculator_click);
	}
	
	function place_button(id, x, y){
		var btn = document.getElementById(id);
		btn.style.left = String(x) + "px";
		btn.style.top = String(y) + "px";
	}
	
	//actual math (math is hard so...)
	//this is not used, but it's still here just incase
	function handleCalculation(){
		str_calculator += calcoutput.innerHTML.length;
		snd_calculator_click();
	}
	
	function return_output(str){
		calcoutput.innerHTML = str;
	}
	
	//either word or number
	function handleNumberCalculation(str_1, str_2){
		if(Math.random()*100 > 50){
			calcoutput.innerHTML = str_1;
		}else{
			calcoutput.innerHTML = str_2;
		}
		//
		//handleCalculation();
	}
	
	function event_over(id){
		document.getElementById(id).addEventListener('mouseover', function(){
				document.getElementById(id).innerHTML = "<img src=" + str_image_path + id +"_OVER.png>";
		});
	}
	//this is ok
	function event_out(id){
		document.getElementById(id).addEventListener('mouseout', function(){
				document.getElementById(id).innerHTML = "<img src=" + str_image_path + id +"_OUT.png>";
		});
	}
	
	//calculator background container
	var calcula2000 = document.createElement("div");
	calcula2000.id = "calcula2000";
	calcula2000.style.position = "fixed";
	calcula2000.style.color = "black";
	calcula2000.style.textAlign = "center";
	calcula2000.style.font = "35px 'fixedsys_excelsior_3', 'Lucida Console', Monaco, monospace";
	calcula2000.style.right = "10px";
	calcula2000.style.bottom = "10px";
	calcula2000.innerHTML = "<img src=" + str_image_path + "/IMG_CALC_BACKGROUND.png>";
	document.getElementsByTagName("body")[0].appendChild(calcula2000);
	
	//build everything else into it
	
	//text
	var calcoutput = document.createElement("div");
	calcoutput.id = "txt_calcoutput";
	calcoutput.style.position = "absolute";
	calcoutput.style.width = "460px";
	calcoutput.style.height = "40px";
	calcoutput.innerHTML = "MATH!";
	calcoutput.style.top = "30px";
	calcoutput.style.left = "70px";
	document.getElementById("calcula2000").appendChild(calcoutput);
	
	
	//buttons
	for(var i = 1; i<25; i++){
		var calcbtn = ["calcbtn"+i];
		calcbtn = document.createElement("div");
		calcbtn.id = "IMG_CALC_BTN"+String(i);
		calcbtn.style.position = "absolute";
		calcbtn.style.cursor = "pointer";
		calcbtn.innerHTML = "<img src=" + str_image_path + "/IMG_CALC_BTN"+ String(i) +"_OUT.png>";
		//
		document.getElementById("calcula2000").appendChild(calcbtn);
		//not in use
		//event_over(calcbtn.id);
		//event_out(calcbtn.id);
	}
	//place buttons
	//row 1
	place_button("IMG_CALC_BTN1", 60, num_btn_y_row1);
	place_button("IMG_CALC_BTN2", 152, num_btn_y_row1);
	place_button("IMG_CALC_BTN3", 220, num_btn_y_row1);
	place_button("IMG_CALC_BTN4", 288, num_btn_y_row1);
	place_button("IMG_CALC_BTN5", 410, num_btn_y_row1);
	place_button("IMG_CALC_BTN6", 480, num_btn_y_row1);
	//row 2
	place_button("IMG_CALC_BTN7", 60, num_btn_y_row2);
	place_button("IMG_CALC_BTN8", 152, num_btn_y_row2);
	place_button("IMG_CALC_BTN9", 220, num_btn_y_row2);
	place_button("IMG_CALC_BTN10", 288, num_btn_y_row2);
	place_button("IMG_CALC_BTN11", 410, num_btn_y_row2);
	place_button("IMG_CALC_BTN12", 480, num_btn_y_row2);
	//row 3
	place_button("IMG_CALC_BTN13", 60, num_btn_y_row3);
	place_button("IMG_CALC_BTN14", 152, num_btn_y_row3);
	place_button("IMG_CALC_BTN15", 220, num_btn_y_row3);
	place_button("IMG_CALC_BTN16", 288, num_btn_y_row3);
	place_button("IMG_CALC_BTN17", 410, num_btn_y_row3);
	place_button("IMG_CALC_BTN18", 480, num_btn_y_row3);
	//row 4 (last)
	place_button("IMG_CALC_BTN19", 60, num_btn_y_row4);
	place_button("IMG_CALC_BTN20", 152, num_btn_y_row4);
	place_button("IMG_CALC_BTN21", 220, num_btn_y_row4);
	place_button("IMG_CALC_BTN22", 288, num_btn_y_row4);
	place_button("IMG_CALC_BTN23", 410, num_btn_y_row4);
	place_button("IMG_CALC_BTN24", 480, num_btn_y_row4);
	
	//events for each button
	//EACH button
	//MS
	document.getElementById("IMG_CALC_BTN1").addEventListener('click', function(){
		return_output("Ms. " + arr_character_names[Math.ceil(Math.random()*arr_character_names.length)-1]);
		snd_calculator_click();
	});
	//7
	document.getElementById("IMG_CALC_BTN2").addEventListener('click', function(){
		handleNumberCalculation("Seven!", "7");
		snd_calculator_click();
	});
	//8
	document.getElementById("IMG_CALC_BTN3").addEventListener('click', function(){
		handleNumberCalculation("Eight??", "8");
		snd_calculator_click();
	});
	//9
	document.getElementById("IMG_CALC_BTN4").addEventListener('click', function(){
		handleNumberCalculation("Nine", "9");
		snd_calculator_click();
	});
	//divide
	document.getElementById("IMG_CALC_BTN5").addEventListener('click', function(){
		handleNumberCalculation("Division", "/");
		snd_calculator_click();
	});
	//#
	document.getElementById("IMG_CALC_BTN6").addEventListener('click', function(){
		handleNumberCalculation("HASHTAG", "#hashtag");
		snd_calculator_click();
	});
	//MR
	document.getElementById("IMG_CALC_BTN7").addEventListener('click', function(){
		return_output("Mister " + arr_character_names[Math.ceil(Math.random()*arr_character_names.length)-1]);
		snd_calculator_click();
	});
	//4
	document.getElementById("IMG_CALC_BTN8").addEventListener('click', function(){
		handleNumberCalculation("Four!?", "4");
		snd_calculator_click();
	});
	//5
	document.getElementById("IMG_CALC_BTN9").addEventListener('click', function(){
		handleNumberCalculation("Five!", "5");
		snd_calculator_click();
	});
	//6
	document.getElementById("IMG_CALC_BTN10").addEventListener('click', function(){
		handleNumberCalculation("Six.", "6");
		snd_calculator_click();
	});
	//*
	document.getElementById("IMG_CALC_BTN11").addEventListener('click', function(){
		handleNumberCalculation("Multiplication", "*");
		snd_calculator_click();
	});
	//%
	document.getElementById("IMG_CALC_BTN12").addEventListener('click', function(){
		handleNumberCalculation("Percent", "%");
		snd_calculator_click();
	});
	//M+
	document.getElementById("IMG_CALC_BTN13").addEventListener('click', function(){
		return_output("Increase maturity by 1");
		snd_calculator_click();
	});
	//1
	document.getElementById("IMG_CALC_BTN14").addEventListener('click', function(){
		handleNumberCalculation("ONE!!", "1");
		snd_calculator_click();
	});
	//2
	document.getElementById("IMG_CALC_BTN15").addEventListener('click', function(){
		handleNumberCalculation("Too!", "2");
		snd_calculator_click();
	});
	//3
	document.getElementById("IMG_CALC_BTN16").addEventListener('click', function(){
		handleNumberCalculation("Three.", "3");
		snd_calculator_click();
	});
	//-
	document.getElementById("IMG_CALC_BTN17").addEventListener('click', function(){
		handleNumberCalculation("Subtraction", "-");
		snd_calculator_click();
	});
	//CLEAR
	document.getElementById("IMG_CALC_BTN18").addEventListener('click', function(){
		return_output("MATH!")
		snd_calculator_click();
	});
	//M-
	document.getElementById("IMG_CALC_BTN19").addEventListener('click', function(){
		return_output("Decrease maturity by 1");
		snd_calculator_click();
	});
	//0
	document.getElementById("IMG_CALC_BTN20").addEventListener('click', function(){
		handleNumberCalculation("NUMBER NOTHING", "0");
		snd_calculator_click();
	});
	//.
	document.getElementById("IMG_CALC_BTN21").addEventListener('click', function(){
		handleNumberCalculation("Period.", ".");
		snd_calculator_click();
	});
	//+-
	document.getElementById("IMG_CALC_BTN22").addEventListener('click', function(){
		handleNumberCalculation("Give or take...", "+-");
		snd_calculator_click();
	});
	//+
	document.getElementById("IMG_CALC_BTN23").addEventListener('click', function(){
		handleNumberCalculation("Addition", "+");
		snd_calculator_click();
	});
	//RETURN STATE-OF-THE-ART MATHS!
	document.getElementById("IMG_CALC_BTN24").addEventListener('click', function(){
		//
		if(Math.random()*100 > 40){
			return_output(arr_text_calculator_output[Math.ceil(Math.random()*arr_text_calculator_output.length)-1]);
		}else{
			return_output(calcoutput.innerHTML.length);
		}
		//
		play_calcuaudio(arr_snd_calculator_tadas);
		//
	});
	
	//tada!
	play_calcuaudio(arr_snd_tada);
	console.log("CALCULA2000.js has successfully initiated!");
}