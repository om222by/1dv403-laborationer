"use strict";

var MessageBoard = {
    
    
    messages: [],
    
    
    Empty: false,
    
    
    init:function(e)
    {   
        var that = this;
        
        var input = document.querySelector("#rutan");
        var button = document.querySelector("#button");
        
        function Empty(element, errorMessage){
            if(element.value.length === 0){
                alert(errorMessage);
                element.focus();
                element.value === null;
                return false;
            }
            else {
                MessageBoard.Empty = true;
            }
            
        }
        
        
        button.onclick = function(e){
            
            new Empty(input,"Skriv ett meddelande")
            if(MessageBoard.Empty){
                e.preventDefault();
                var mess = new Message(input.value, new Date());
                that.messages.push(mess);
                console.log(document.getElementById("rutan").value);
                document.getElementById("rutan").value = "";
                that.renderMessages();
                document.getElementById("counter").innerHTML = "";
                document.getElementById("counter").innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
            }
        };
        
        input.onkeypress = function(e) {
                
                if(e.keyCode === 13 && !e.shiftKey){
                    new Empty(input,"Skriv ett meddelande");
                    
                    if (MessageBoard.Empty){
                        e.preventDefault();
                        var mess = new Message(input.value, new Date());
                        that.messages.push(mess);
                        console.log(document.getElementById("rutan").value);
                        document.getElementById("rutan").value = "";
                        that.renderMessages();
                        document.getElementById("counter").innerHTML = "";
                        document.getElementById("counter").innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
                    }
                }
            };
    },
    
    removeMessages:function(messageID){
        
        var conf = confirm("Vill du verkligen radera meddelandet");
        if (conf === true){
            MessageBoard.messages.splice(messageID, 1);
            document.getElementById("counter").innerHTML = "";
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
            var message = document.createElement("div");
            message.setAttribute("id","messageDiv");
            var text = document.createElement("p");
            var time = document.createElement("p");
            var imgClose = document.createElement("img");
            var imgTime = document.createElement("img");
            imgTime.src = "0.png";
            imgClose.src = "1.png";
            imgClose.alt = "close";
            
            
            
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            time.innerHTML = MessageBoard.messages[messageID].getDateText();
            message.appendChild(imgClose);
            message.appendChild(imgTime);
            message.appendChild(text);
            message.appendChild(time);
            div.appendChild(message);
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

