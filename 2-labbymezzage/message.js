"use strict";
function Message(message, date) { 
    
    this.getText = function() { 
        return message;
        };
        
    this.setText = function(_text) {
        message = _text;
    };
    
    this.getStringDate = function () {
        return "Inlägget skapades " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " klockan: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    
    this.getDate = function () {
        return date;//.format("dddd, mmmm, dS, yyyy, h:MM:ss");
    };
    
    
    this.setDate = function(_date) {
        date = _date;
    };
    
}

Message.prototype.toString = function() {
    return this.getText() +" (" + this.getDate() + ")";
};

Message.prototype.getHTMLText = function() {
    
    return this.getText().replace(/[\n\r]/g, '<br />');
};



Message.prototype.getDateText = function() {
    
    return this.getDate().toString().split(" ")[4];
};
