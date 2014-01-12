"use strict";

var PWD = {
    
    init: function() {
        var surface = document.getElementById("desktop");
        var menu = document.createElement("div");
        var imgViewer = document.createElement("div");
        var a = document.createElement("a");
        var icon = document.createElement("img");
        
        menu.setAttribute("id","menu");
        imgViewer.setAttribute("id","imageViewer");
        
        a.setAttribute("href","#");
        icon.setAttribute("src","logga.png");
        
        
        a.appendChild(icon);
        imgViewer.appendChild(a);
        menu.appendChild(imgViewer);
        surface.appendChild(menu);
        
        
        a.onclick = function(e){
        
                
                var labelPic = document.createElement("img");
                var labelPicP = document.createElement("p");
                var label = document.createElement("p");
                var close = document.createElement("p");
                var closeImg = document.createElement("img");
                var closeLink = document.createElement("a");
                var windowHeader = document.createElement("div");
                var status = document.createElement("p");
                var ajaxLoader = document.createElement("img");
                var layout = document.createElement("div");
                var popup = document.createElement("div"); //den nya instansen
                var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";    
                
                labelPic.className = "labelPic";
                label.className = "label";
                close.className = "close";
                windowHeader.className="windowHeader";
                status.className ="status";
                layout.className ="layout";
                popup.className = "popup";
                
                closeLink.setAttribute("href","#");
                labelPic.src = ("logga.png");
                ajaxLoader.src =("ajax-loader.gif");
                closeImg.src =("close.png");
                
                label.innerHTML = "Image Viewer";
                
                
                closeLink.appendChild(closeImg);
                close.appendChild(closeLink);
                labelPicP.appendChild(labelPic);
                windowHeader.appendChild(labelPicP);
                windowHeader.appendChild(label);
                windowHeader.appendChild(close);
                status.appendChild(ajaxLoader);
                popup.appendChild(windowHeader);
                popup.appendChild(layout);
                popup.appendChild(status);
                surface.appendChild(popup);
                
                closeLink.onclick = function () {
                    surface.removeChild(popup);
                };
                
                new AjaxCon(url, function (data) {
                    
                    var jsonImages = JSON.parse(data);
                    var width = 0;
                    var height = 0;
                    var i = null;
                    var imgCounter = document.getElementsByTagName("div");
                    
                    for (i=0; i < jsonImages.length; i+=1){
                        
                        var ajaxImageDiv = document.createElement("div");
                        
                        ajaxImageDiv.className = "ajaxImg";
                        layout.appendChild(ajaxImageDiv);
                        
                        //sätter bredden på tumnaglarna
                        if(jsonImages[i].thumbWidth > width){
                            
                            width = jsonImages[i].thumbWidth;
                        }
                        
                        //sätter höjden på tumnaglarna
                        if(jsonImages[i].thumbHeight > height){
                            
                            height = jsonImages[i].thumbHeight;
                        }
                        
                        var ajaxImages = document.createElement("img");
                        
                        ajaxImages.setAttribute("src",jsonImages[i].thumbURL);
                        
                        var ajaxImageLinks = document.createElement("a");
                        
                        ajaxImageLinks.setAttribute("href","#");
                        
                        ajaxImageLinks.appendChild(ajaxImages);
                        
                        ajaxImageDiv.appendChild(ajaxImageLinks);
                        
                        PWD.setBackground(jsonImages[i].URL, ajaxImageLinks);
                        
                    }
                        
                        for (var x = 0; x < imgCounter.length; x+=1){
                            if (imgCounter[x].className === "ajaxImg") {
                                
                                imgCounter[x].style.width = width + "px";
                                imgCounter[x].style.height = height + "px";
                            }
                        }
                        
                        status.removeChild(ajaxLoader);
                });
                return false;
            
        };
    },
    
    setBackground: function (backgroundImage, change) {
        change.onclick = function(){
            document.getElementById("main").style.backgroundImage = "url(" + backgroundImage + ")";
            document.body.style.backgroundRepeat="repeat";
        };
        
    }

};

function AjaxCon(url, callback) {
    var READY_STATE_COMPLETE = 4;

    var xhr = this.getXHR();
    
    xhr.onreadystatechange = function () {

        if (xhr.readyState === READY_STATE_COMPLETE) {
        
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                callback(xhr.responseText);
                console.log(xhr);
            }

        else{
                console.log("läsfel, status:" + xhr.status);  
            }
        }

    };

    xhr.open("get", url, true);

    xhr.send(null);
}

AjaxCon.prototype.getXHR = function () {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();       
        } 
    catch (error){
    
    }

    return xhr;
};



window.onload = PWD.init;
    
