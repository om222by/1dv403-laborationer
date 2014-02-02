"use strict";

var Memory = {
    
    game_board: document.createElement("div"),
    
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
        Memory.memoryBoard = new RandomGenerator.getPictureArray(4,4);
        
        var sendToTryCard = function(j) {return function() {Memory.tryCard(j)}};
        
        Memory.game_board.setAttribute("id", "game_board");
        
        for (var i = 0; i < Memory.memoryBoard.length; i +=1){
            
            
            Memory.cardDiv = document.createElement("div");
            Memory.cardDiv.setAttribute("class", "card");
            
            Memory.cardPicture = document.createElement("img");
            Memory.cardPicture.setAttribute("src", "pics/0.png");
            
            Memory.cardLink = document.createElement("a");
            Memory.cardLink.setAttribute("class", i);
            Memory.cardLink.addEventListener("click", sendToTryCard(i), false);
            
            
            Memory.cardLink.appendChild(Memory.cardPicture);
            Memory.cardDiv.appendChild(Memory.cardLink);
            
            Memory.game_board.appendChild(Memory.cardDiv);
            
            
            
        }
        
        document.appendChild(Memory.game_board);
        
        
        //for (var i = 0; i < 3; i++) {
        //    tr.appendChild(td);
        //    for (var y = 0; y < 4; y++) {
        //        
        //        for (var picture in Memory.Pictures){
        //               img.setAttribute("src", "pics/0.png");
        //                a.appendChild(img);
        //        }
        //        td.appendChild(a);
        //    }
        //}
    },
    
    tryCard: function (thisCardNumber) {
        
        Memory.clickedCards.push(thisCardNumber);
        
        //vänd valt kort
        var thisCardPicture = document.getElementById(thisCardNumber);
        thisCardPicture.setAttribute("src", "pics/" + Memory.memoryBoard[thisCardNumber] + ".png");
        
        //när två kort är vända
        if(Memory.clickedCards.length == 2 && Memory.clickedCards[0] != Memory.clickedCards[1]){
            
            //kollar om gissningen är korrekt
            Memory.checkIfCorrect(Memory.memoryBoard[Memory.clickedCards[0]], Memory.memoryBoard[Memory.clickedCards[1]]);
            
            //ökar counter och avmarkerar korten
            Memory.counter+=1;
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
        
    },
    
    checkIfCorrect: function (card1, card2) {
        
        var picture1;
        var picture2;
        
        if(card1 == card2) {
            
            Memory.correctGuesses +=2;
            
            //Låter ParentNoden döda länkarna i barnen
            var link1 = document.getElementsByClassName(Memory.clickedCards[0]);
            link1.parentNode.removeChild(link1[0]);
            var link2 = document.getElementsByClassName(Memory.clickedCards[0]);
            link2.parentNode.removeChild(link2[0]);
            
            
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

window.onload = Memory.init();  













