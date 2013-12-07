"use strict";

var MessageBoard = {
    
    
    messages: [],
    
    
    init:function(e)
    {   
        var that = this;
        
        var input = document.querySelector("#rutan");
        var button = document.querySelector("#button");
        button.addEventListener("click", function(e){
            e.preventDefault();
            var mess = new Message(input.value, new Date());
            that.messages.push(mess);
            console.log(document.getElementById("rutan").value);
            document.getElementById("rutan").value = "";
            that.renderMessages();
            document.getElementById("counter").innerHTML = MessageBoard.messages.length;
            
        });
        
    },
    
    removeMessages:function(messageID){
        var deleted = messageID;
        MessageBoard.messages.splice(0, 1, messageID);
        document.getElementById("counter").innerHTML = MessageBoard.messages.length;
        this.renderMessages();
        return MessageBoard.messages;
    },
    
    
    renderMessages:function(){
        //remove all messages
        document.getElementById("chatt").innerHTML = "";
        
        //renders all messages
        for(var i=0; i < MessageBoard.messages.length; i++){
                MessageBoard.renderMessage(i);
            };
    },
    
    //starta en overflow-ruta över chatten
    renderMessage:function(messageID)
        {
            var div = document.querySelector("#chatt");
            var text = document.createElement("p");
            var time = document.createElement("p");
            var imgClose = document.createElement("img");
            imgClose.src = "1.png";
            imgClose.alt = "close";
            imgClose.onclick = function () {
                MessageBoard.removeMessages(messageID);
            };
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            time.innerHTML = MessageBoard.messages[messageID].getDateText();
            div.appendChild(imgClose);
            div.appendChild(text);
            div.appendChild(time);
        }
    
};


window.onload = function (){
    MessageBoard.init();
};