"use strict";
function Message(message, date) { 
    
    this.getText = function() { 
        return message;
        };
        
    this.setText = function(_text) {
        message = _text;
    };
    
    this.getStringDate = function () {
        
        function lessThanTen(number)
        {
            return(number < 10? "0"+number : number);
        }
        return "Inlägget skapades " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " klockan: " + lessThanTen(date.getHours()) + ":" + lessThanTen(date.getMinutes()) + ":" + lessThanTen(date.getSeconds());
        //return lessThanTen(message.getDate().getMinutes());
    };
    
    this.getDate = function () {
        return date;
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
