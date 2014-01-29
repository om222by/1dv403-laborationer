"use strict";
var JAWM = {
        
    init: function (){
        var imageViewer = document.getElementById("imageViewer");
        var rss = document.getElementById("rss");
        var memory = document.getElementById("memory");
        
        imageViewer.addEventListener("click", function (){
            new JAWM.ImageViewer();
        },false);
        
        rss.addEventListener("click",function () {
            new JAWM.RssReader();
        },false);
        
        memory.addEventListener("click", function () {
            new JAWM.Memory();
        },false);
    }
};

window.onload = JAWM.init;