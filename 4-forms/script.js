"use strict";
var Form = {
        
exist: null,

    validateForm: function (){
        var fname = document.getElementById("firstName");
        var lname = document.getElementById("lastName");
        var pnummer = document.forms.kontaktform.postNumber.value;
        var mejl = document.forms.kontaktform.email.value;
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
            console.log(this.exist);
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
                console.log(ldivType);
                //ldivType.parentNode.removeChild(ldivType);
                //this.exist = null;
            }
        };
        
        pnummer.onblur = function (){
            
        };
    }
};

window.onload = function (){
    Form.validateForm();
};

