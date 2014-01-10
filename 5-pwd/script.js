"use strict";
var Application = {
    
    desktop:function() {
        var imgViewer = document.getElementById("imageViewer");
        imgViewer.onClick();
    }
    
};

window.onload = function () {
    Application.desktop();  
};