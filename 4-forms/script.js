"use strict";

var Validator = {
    
    form: document.getElementById("form"),
    
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    postNumber: document.getElementById("postNumber"),
    email: document.getElementById("email"),
    selectedOption: document.getElementById("priceModel"),
    
    testFirstName: false,
    testLastName: false,
    testPostNumber: false,
    testMail: false,
    testSelect: false,


    init: function () {
        
        firstName.addEventListener("blur", function() {
            
            Validator.testFirstName = Validator.validate(firstName, /^[a-zåäö]{1,}(\-[a-zåäö]{1,})?$/i,
            "Du får inte lämna fältet tomt. Du får bara använda bokstäver");
            
        }, false);
        lastName.addEventListener("blur", function () {
            
            Validator.testLastName = Validator.validate(lastName, /^[a-zåäö]{1,}(\-[a-zåäö]{1,})?$/i,
            "Du får inte lämna fältet tomt. Du får bara använda korrekta tecken");
            
        },false);
        postNumber.addEventListener("blur", function () {
            
            Validator.testPostNumber = Validator.validate(postNumber,/^[S][E]\s?\d{5}|[S][E]\s?\d{3}\s?-?\d{2}|\d{5}|\d{3}\s?-?\d{2}$/g,
            "Du får inte lämna fältet tomt. Du får inte ange postnummer i fel format");
            
        },false);
        email.addEventListener("blur", function () {
            
            Validator.testMail = Validator.validate(email, /^[0-9a-z.]{2,64}@[a-z]*?\.[a-z]{2,}$/g,
            "Du får inte lämna fältet tomt. Du får inte ange mailadressen i ett felaktigt format.");
            
        },false);
        
        
        //kollar om alla fälten är korrekta genom att kalla på en funktion
        form.onsubmit = alert(submitForm);
        
        function submitForm () {
            
            if(Validator.testFirstName && Validator.testLastName && Validator.testPostNumber && Validator.testMail){
                
                return Validator.confirmSubmit();
            }
            else {
                
                return false;
            }
        }
        
        
    },
    
    confirmSubmit: function () {
  
      var bg = document.getElementById("background");
      var popup = document.getElementById("popup");
      
      bg.style.visibility = "visible";
      popup.style.visibility = "visible";
      
      var list = document.createElement("ul");
      
      var liFirstName = document.createElement("li");
      var liLastName = document.createElement("li");
      var liPostNumber = document.createElement("li");
      var liSelectedOption = document.createElement("li");
      var liMailAdress = document.createElement("li");
      var body = document.getElementsByTagName("body");

      var close = document.getElementById("cancel");
      
      liFirstName.appendChild(document.createTextNode("Förnamn: " + firstName.value));
      liLastName.appendChild(document.createTextNode("Efternamn: " + lastName.value));
      liPostNumber.appendChild(document.createTextNode("Postnummer:" + postNumber.value));
      liMailAdress.appendChild(document.createTextNode("Email: " + mailAdress.value));
      liSelectedOption.appendChild(document.createTextNode("Prismodell: " + selectedOption.options[Validator.selectedOption.selectedIndex].text));
      
      list.appendChild(liFirstName);
      list.appendChild(liLastName);
      list.appendChild(liPostNumber);
      list.appendChild(liSelectedOption);
      list.appendChild(liMailAdress);
      
      popup.appendChild(list);
      
      close.onclick = function () {
          body.removeChild(bg);
      };
    
    },
    
    validate: function(input, regex, error) {
        
        
        //tar bort felmeddelande om det redan finns
        if(input.nextSibling.getAttribute("class") == "errorMessage " + input.name){
            
            var removeThis = input.nextSibling;
            form.removeChild(removeThis);
        }
        
        else if(input.value.match(regex)) 
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
            form.insertBefore(errorMessage, input.nextSibling);
            
            return false;
        }
    }
};

window.onload = Validator.init;
