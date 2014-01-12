"use strict";
var Form = {
        
    exist: null,

    validateForm: function (){
        var fname = document.getElementById("firstName");
        var lname = document.getElementById("lastName");
        var pnummer = document.getElementById("postNumber");
        var mejl = document.getElementById("email");
        var that = this;

        fname.onblur = function () {
            var fptagg, fnamn;
            if (fname.value === null || fname.value === ""){
                var fDiv = document.getElementById("fnamn");
                
                if (!this.exist){
                    fptagg = document.createElement("p");
                    fnamn = document.createTextNode("Detta fält får inte lämnas tomt");
                    
                    fptagg.setAttribute("id","fdelete");
                    
                    fptagg.appendChild(fnamn);
                    fDiv.appendChild(fptagg);
                    
                    this.exist = true;
                }
            }
            
            else{
                var divType = document.getElementById("fdelete");
                divType.parentNode.removeChild(divType);
                this.exist = null;
            }
            this.exist = 0;
        };
        
        
        lname.onblur = function () {
            var lptagg, lnamn;
            if(lname.value === null || lname.value === ""){
            
                var lDiv = document.getElementById("enamn");
                
                if (!this.exist){
                    lptagg = document.createElement("p");
                    lnamn = document.createTextNode("Fyll i ditt namn");

                    lptagg.setAttribute("id", "ldelete");
                    
                    lptagg.appendChild(lnamn);
                    lDiv.appendChild(lptagg);
                    
                    this.exist = true;
                }
            }
            
            else{
                var ldivType = document.getElementById("ldelete");
                ldivType.parentNode.removeChild(ldivType);
                this.exist = null;
            }
        };
        
        pnummer.onblur = function (){
            var pptagg, pnum;
            var pval = pnummer.value;
            var postMatch = /^\d{5}|\d{3}\s?-?\d{2}|SE\d{5}$/g;
            if (!pval.match(postMatch)){
                var pDiv = document.getElementById("postnummer");
                
                pptagg = document.createElement("p");
                pnum = document.createTextNode("Du måste ange postnummer i formatet XXXXX");
                
                pptagg.setAttribute("id","pdelete");
                
                pptagg.appendChild(pnum);
                pDiv.appendChild(pptagg);
            }
            else {
                var pDivType = document.getElementById("pdelete");
                pDivType.parentNode.removeChild(pDivType);
            }
        };
        
        /*mejl.onblur = function (){
            var mailMatch = ^/[0-9a-z.]{1,64}@[a-z]*?\.[a-z]{2,}$;
        };*/
    }
};

window.onload = function (){
    Form.validateForm();
};

