"use strict";

var Validator = {
    
    form: null,
    
    
    firstName: null,
    lastName: null,
    postNumber: null,
    email: null,
    selectedOption: null,
    
    testFirstName: null,
    testLastName: null,
    testPostNumber: null,
    testMail: null,
    testSelect: null,


    init: function () {
        
        Validator.form = document.getElementById("form");
        
        Validator.testFirstName = false;
        Validator.testLastName = false;
        Validator.testPostNumber = false;
        Validator.testMail = false;
        Validator.testSelect = false;
        
        Validator.firstName = document.getElementById("firstName");
        Validator.lastName = document.getElementById("lastName");
        Validator.postNumber = document.getElementById("postNumber");
        Validator.email = document.getElementById("email");
        Validator.selectedOption = document.getElementById("priceModel");
        var buyButton = document.getElementById("send");
        
        
        Validator.firstName.addEventListener("blur", function() {
            
            Validator.testFirstName = Validator.validate(Validator.firstName, /^[a-zåäö]{1,}(\-[a-zåäö]{1,})?$/i,
            "Du får inte lämna fältet tomt. Du får bara använda bokstäver");
            
        }, false);
        Validator.lastName.addEventListener("blur", function () {
            
            Validator.testLastName = Validator.validate(Validator.lastName, /^[a-zåäö]{1,}(\-[a-zåäö]{1,})?$/i,
            "Du får inte lämna fältet tomt. Du får bara använda korrekta tecken");
            
        },false);
        Validator.postNumber.addEventListener("blur", function () {
            
            Validator.testPostNumber = Validator.validate(Validator.postNumber,/^[S][E]\s?\d{5}$|^[S][E]\s?\d{3}\s?-?\d{2}$|^\d{5}$|^\d{3}\s?-?\d{2}$/g,
            "Du får inte lämna fältet tomt. Du får inte ange postnummer i fel format");
            
        },false);
        Validator.email.addEventListener("blur", function () {
            
            Validator.testMail = Validator.validate(Validator.email, /^[0-9a-z.]{2,64}@[a-z]*?\.[a-z]{2,}$/g,
            "Du får inte lämna fältet tomt. Du får inte ange mailadressen i ett felaktigt format.");
            
        },false);
        
        //kollar om alla fälten är korrekta genom att kalla på en funktion
        buyButton.onclick = function submitForm () {
            Validator.firstName.focus();
            Validator.lastName.focus();
            Validator.postNumber.focus();
            Validator.email.focus();
            buyButton.focus();
            
            
                if(Validator.testFirstName && Validator.testLastName && Validator.testPostNumber && Validator.testMail){
                
                    return Validator.confirmSubmit();
                }
                else {
                    
                    return false;
                }
        };
        
        
    },
    
    confirmSubmit: function () {
  
      var bg = document.getElementById("background");
      var popup = document.getElementById("popup");
      
      bg.style.visibility = "visible";
      popup.style.visibility = "visible";
      
      var list = document.getElementById("list");
      
      var liFirstName = document.createElement("li");
      var liLastName = document.createElement("li");
      var liPostNumber = document.createElement("li");
      var liSelectedOption = document.createElement("li");
      var liMailAdress = document.createElement("li");

      var close = document.getElementById("cancel");
      
      liFirstName.appendChild(document.createTextNode("Förnamn: " + Validator.firstName.value));
      liLastName.appendChild(document.createTextNode("Efternamn: " + Validator.lastName.value));
      liPostNumber.appendChild(document.createTextNode("Postnummer:" + Validator.postNumber.value));
      liMailAdress.appendChild(document.createTextNode("Email: " + Validator.email.value));
      liSelectedOption.appendChild(document.createTextNode("Prismodell: " + Validator.selectedOption.options[Validator.selectedOption.selectedIndex].text));
      
      list.appendChild(liFirstName);
      list.appendChild(liLastName);
      list.appendChild(liPostNumber);
      list.appendChild(liSelectedOption);
      list.appendChild(liMailAdress);
      
      
      close.onclick = function () {
          list.innerHTML = "";
          bg.style.visibility = "hidden";
          popup.style.visibility = "hidden";
      };
    
    },
    
    validate: function(input, regex, error) {
        
        //tar bort felmeddelande om det redan finns
        if(input.nextSibling.getAttribute("class") == "errorMessage " + input.name){
            
            var removeThis = input.nextSibling;
            Validator.form.removeChild(removeThis);
        }
        
        if(input.value.match(regex)) 
        {
            //Om postnumret är godkänt men inte har det format vi vill ha
            if(input.name == "postNumber" && null === input.value.match(/^[0-9]{5}$/))
            {
                //modifierar postnumret till den output vi vill ha
                input.value = input.value.replace(/[^0-9]/g, "");
            }
            
        return true;
        
        }
        
        else {
            
            var errorMessage = document.createElement("p");
            errorMessage.setAttribute("class", "errorMessage " + input.name);
            
            var messageText = document.createTextNode(error);
            errorMessage.appendChild(messageText);
            
            //sätter in felmeddelandet innan nästa fält
            Validator.form.insertBefore(errorMessage, input.nextSibling);
            
            return false;
        }
    }
};

window.onload = function () {
    Validator.init();
}
