"use strict";

var Memory = {
    
    game_board: null,
    
    //spelplanen, där de vända kortens "bilder" hamnar
    memoryBoard: [],
    
    //gissade korten
    clickedCards: [],
    
    correctGuesses: 0,
    counter: 0,
    
    ///varibler att spara element i
    cardDiv: null,
    cardLink: null,
    cardPicture: null,
    
    init: function ()
    {
        Memory.game_board = document.getElementById("game_board");
        
        Memory.memoryBoard = new RandomGenerator.getPictureArray(4,4);
        
        
        //funktion som fixar closure-problemet i loopen nedan på nåt sätt
        var sendToTryCard = function(j) {
            return function() {
                if (this.classList.contains("turned")){
                    return null;
                }
                else{
                    tryCard(j);
                }
            };
        };
        
    
        for (var i = 0; i < Memory.memoryBoard.length; i +=1){
            
            Memory.cardDiv = document.createElement("div");
            Memory.cardDiv.setAttribute("class", "card");
            
            Memory.cardPicture = document.createElement("img");
            Memory.cardPicture.setAttribute("src", "pics/0.png");
            Memory.cardPicture.setAttribute("id", i);
            
            Memory.cardLink = document.createElement("a");
            Memory.cardLink.setAttribute("class", i);
            Memory.cardLink.setAttribute("href", "#");
            
            //samlar upp alla en och en istället för bara sista
            Memory.cardLink.addEventListener("click", sendToTryCard(i), false);
            
            if(i % 4 === 0){
                Memory.cardDiv.setAttribute("class", "card new_row_card");
            }
            
            Memory.cardLink.appendChild(Memory.cardPicture);
            Memory.cardDiv.appendChild(Memory.cardLink);
            
            Memory.game_board.appendChild(Memory.cardDiv);
            
        }
        
        function  tryCard (thisCardNumber) {
            
            Memory.clickedCards.push(thisCardNumber);
            
            
            
            //vänd valt kort
            var thisCardPicture = document.getElementById(thisCardNumber);
            thisCardPicture.setAttribute("src", "pics/" + Memory.memoryBoard[thisCardNumber] + ".png");
            
            //när två kort är vända
            if(Memory.clickedCards.length == 2 && Memory.clickedCards[0] != Memory.clickedCards[1]){
                
                //kollar om gissningen är korrekt
                Memory.checkIfCorrect(Memory.memoryBoard[Memory.clickedCards[0]], Memory.memoryBoard[Memory.clickedCards[1]]);
                
                //ökar counter och avmarkerar korten
                Memory.counter++;
                document.getElementById("counter").innerHTML = "Antal gissningar: " + Memory.counter;
                Memory.clickedCards.length = 0;
            }
                
            //Om användaren klickar på samma kort två gånger
            else if(Memory.clickedCards[0] == Memory.clickedCards[1])
            {
                Memory.clickedCards.pop();
            }
                
            //är det inga nedvända kort kvar?
            if(Memory.correctGuesses == Memory.memoryBoard.length)
            {
                document.body.removeChild(document.getElementById("game_board"));
                document.body.removeChild(document.getElementById("counter"));
                document.getElementById("win").innerHTML = "Grattis! Du vann efter "+ Memory.counter +" gissningar!";
                
            }
        };
    
    },
    
    checkIfCorrect: function (card1, card2) {
        
        var picture1;
        var picture2;
        
        if(card1 == card2) {
            
            Memory.correctGuesses +=2;
            
            //Låter ParentNoden döda länkarna i barnen
            var link1 = document.getElementsByClassName(Memory.clickedCards[0]);
            link1[0].classList.add('turned');
            var link2 = document.getElementsByClassName(Memory.clickedCards[1]);
            link2[0].classList.add("turned");
            
        }
        else {
            picture1 = document.getElementById(Memory.clickedCards[0]);
            picture2 = document.getElementById(Memory.clickedCards[1]);
            
            //vänder tillbaka korten efter 1 sec
            setTimeout(function() {picture1.src = "pics/0.png";}, 1000);
            setTimeout(function() {picture2.src = "pics/0.png";}, 1000);
        }
    }
};

window.onload = Memory.init;  













