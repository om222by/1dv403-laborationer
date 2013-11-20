"use strict";

var makePerson = function(persArr) {
    var result = {};
    var ages = [];
    var names = [];
    var minAge, maxAge, averageAge, names, sum, personNames;
    
    //läser ut åldrarna och sätter in dem i ages-arrayen
    ages = persArr.map(function(person){
        return person.age;
    });
    
    //jämför ages-arrayen och tar fram maxåldern
    result.maxAge = ages.reduce(function(prevAge, age, index){
        return Math.max(prevAge, age);
    });
    
    //jämför ages-arrayen och tar fram minåldern
    result.minAge = ages.reduce(function(prevAge, age, index){
        return Math.min(prevAge, age);
    });
    
    //summerar ages-arrayen...
    sum = ages.reduce(function(prevAge, age, index) {
        return (prevAge + age);
    });
    
    //...för att sedan ta fram medelvärdet
    result.averageAge = Math.round(sum / ages.length);
    
    personNames = persArr.map(function(person) {
        return person.name;
    });
    
    result.names = personNames.sort(function(a, b){
        return a.localeCompare(b)});
    
    result.names = personNames.reduce(function(prevName, name, i, personNames){
        return prevName + ", " + name;
    });
    
    console.log(names);
    
    console.log(averageAge);

    console.log(minAge);
    
    console.log(maxAge);

    console.log(ages);
    
    
    
    // Lös uppgiften
    
   return result;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);