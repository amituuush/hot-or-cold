$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*------------------------------------------------------
	Your Code
------------------------------------------------------*/

	$("a.new").click(function() {
		var newNumber = Math.floor((Math.random() * 100) + 1); // Creates random number
		console.log(newNumber);
		var counter = 0; // why does this have to be a global variable?
		$("#userGuess").val(""); // resets input value

		$("#guessButton").click(function(e) {
			e.preventDefault();
			
			var userGuess = $("input#userGuess").val(); // stores user guess in userGuess variable
			$("#userGuess").val(""); // resets input value

			var diff = userGuess - newNumber;

			if(userGuess > 100) {
				alert("Number must be between 1 and 100. Pick again!");
			}
			else if(userGuess <= 100) {
				//alerts user hot or cold
				if ((userGuess - newNumber) === 0) {
				$("h2#feedback").text("Correct!");
				}
				else if(Math.abs(diff) <= 5) {
				$("h2#feedback").text("Burning!!!");
				}
				else if(Math.abs(diff) <= 10) {
				$("h2#feedback").text("Hot!");
				}
				else if (Math.abs(diff) <= 20) {
				$("h2#feedback").text("Warm");
				}
				else if (Math.abs(userGuess - newNumber) <= 40) {
				$("h2#feedback").text("Cold");
				}
				else if(Math.abs(userGuess - newNumber) < 100) {
				$("h2#feedback").text("Freezing!");
				}

				//prepends user guesses
				$("ul#guessList").prepend("<li>" + userGuess + "</li>");
				//adds one to counter
				counter += 1;
				// displays added guess counter
				$("span#count").text(counter); 

			}

			

		});
	});
});







/* Notes

1. create newGame function that does everything necessary to start a new game. Try to start a new game without refreshing or reloading the page.
	-This function will itself need to call other functions to take care of specific tasks (ex: setting the randomly generated secret number).

DONE 2. When game starts, secret number between 1 and 100 should be generated. You should write a named function that takes care of this.

DONE 3. User gets feedback about each guess. Write a named function that takes a user guess and determines which feedback to provide.

DONE 4. Feedback about guesses should appear in div#feedback. By default, when the page loads, the text in this field is set to "Make your guess".

DONE 5. The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).

DONE 6. The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.

7. you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.


*/