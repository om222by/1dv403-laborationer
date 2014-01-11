"use strict";
function popupWindow () {
        var surface = document.getElementById("desktop");
        var labelPic = document.createElement("img");
        var label = document.createElement("p");
        var close = document.createElement("p");
        var windowHeader = document.createElement("div");
        var status = document.createElement("p");
        var layout = document.createElement("div");
        var popup = document.createElement("div"); //den nya instansen
        
        labelPic.className = "labelPic";
        label.className = "label";
        close.className = "close";
        windowHeader.className="windowHeader";
        status.className ="status";
        layout.className ="layout";
        popup.className = "popup";
        
        labelPic.src = ("logga.png");
        
        label.innerHTML = "Image Viewer";
        close.innerHTML = "x";
        
        windowHeader.appendChild(labelPic);
        windowHeader.appendChild(label);
        windowHeader.appendChild(close);
        popup.appendChild(windowHeader);
        popup.appendChild(layout);
        popup.appendChild(status);
        surface.appendChild(popup);
    }

window.onload = function () {
    var imgViewer = document.getElementById("imageViewer");
        
        imgViewer.onclick = function(e){
            popupWindow();
            return false;
        };
};