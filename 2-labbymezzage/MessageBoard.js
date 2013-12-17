"use strict";

var MessageBoard = {
    
    
    messages: [],
    
    
    init:function(e)
    {   
        var that = this;
        
        var input = document.querySelector("#rutan");
        var button = document.querySelector("#button");
        
        function Empty(element, errorMessage){
            if(element.value.length === 0){
                alert(errorMessage);
                element.focus();
                element.value.length === 0;
                return false;
            }
        }
        button.addEventListener("click", function(e){
            
            e.preventDefault();
            var mess = new that.Message(input.value, new Date());
            that.messages.push(mess);
            console.log(document.getElementById("rutan").value);
            document.getElementById("rutan").value = "";
            that.renderMessages();
            document.getElementById("counter").innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
            
        });
        document.onkeypress = function(e) {
                
                if(e.keyCode === 13 && !e.shiftKey){
                    /*if(!Empty(input,"Skriv ett meddelande"))
                    {
                        return true;
                    }
                  */  
                e.preventDefault();
                var mess = new this.Message(input.value, new Date());
                that.messages.push(mess);
                console.log(document.getElementById("rutan").value);
                document.getElementById("rutan").value = "";
                that.renderMessages();
                document.getElementById("counter").innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
                }
            };
        
    },
    
    removeMessages:function(messageID){
        
        var conf = confirm("Vill du verkligen radera meddelandet");
        if (conf === true){
            MessageBoard.messages.splice(messageID, 1);
            document.getElementById("counter").innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
            this.renderMessages();
        }
            return MessageBoard.messages;
    },
    
    
    renderMessages:function(){
        //remove all messages
        document.getElementById("chatt").innerHTML = "";
        
        //renders all messages
        for(var i=0; i < MessageBoard.messages.length; i++){
                MessageBoard.renderMessage(i);
            }
    },
    
    
    renderMessage:function(messageID)
        {
            var that = this;
            var div = document.querySelector("#chatt");
            var text = document.createElement("p");
            var time = document.createElement("p");
            var imgClose = document.createElement("img");
            var imgTime = document.createElement("img");
            imgTime.src = "0.png";
            imgClose.src = "1.png";
            imgClose.alt = "close";
            
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            time.innerHTML = MessageBoard.messages[messageID].getDateText();
            div.appendChild(imgTime);
            div.appendChild(imgClose);
            div.appendChild(text);
            div.appendChild(time);
            imgTime.onclick = function () {
                alert(that.messages[messageID].getStringDate());
            };
            imgClose.onclick = function () {
                MessageBoard.removeMessages(messageID);
            };
        }
    
};


window.onload = function (){
    MessageBoard.init();
};

