"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1; // Detta tal behöver bytas ut mot ett slumpat tal.
	
	//Math.floor( Math.random() * (max-min)+1 )+min;
    //Math.floor( Math.random() * (100-1)+1) + 1;
    //
	var count = 0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var count = 0;
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		
		count+=1;
		
		if (number < 1 || number > 100)
		{
			return [false, "Talet är utanför intervallet 1 - 100"];
		}
		else if (number < secret)
		{
			return [false, "Det hemliga talet är högre!"];
		}
		else if (number > secret)
		{
			return [false, "Det hemliga talet är lägre!"];
		}
		else if (number == secret)
		{
			return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
		}
<<<<<<< HEAD
=======
        else (number < 0 || number > 100);
		{
			return [false, "Talet är utanför intervallet 0 - 100"];
>>>>>>> f1594d70066b937e0e0c1e289b71d6015100619b
		else
		{
			return [false, "Ange ett tal!"];
		}
		

		// Plats för förändring.

		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};