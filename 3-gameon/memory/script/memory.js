"use strict";

var Memory = {
    
    pictures: [],
    
    init:function (e)
    {
        
        Memory.pictures = new RandomGenerator.getPictureArray(3,4);
        console.log(Memory.pictures);
        
        var img = document.createElement("img");
        var plan = document.getElementById("spelplan");
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        
        plan.appendChild(table);
        table.appendChild(tr);
        
        for (var i = 0; i < 3; i++) {
            tr.appendChild(td);
            
                for (var y = 0; y < 4; y++) {
                    td.appendChild(img);
                }
        }
        
    }
    
};

window.onload = function() {
  Memory.init();  
};