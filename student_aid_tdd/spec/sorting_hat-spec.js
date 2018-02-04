var sorting_hat = function(arr){
    // Checking for proper type of input
    if(!Array.isArray(arr) || !arr.length>0 || !arr.every(person=> typeof person === "string")){
        throw new TypeError;
    }
    var output = []; // the array that gets returned
    var houses = [ "Gryffindor","Hufflepuff","Ravenclaw","Slytherin"];
    // looping through the input array and assigning house
    for(var i = 0; i<arr.length;i++){
        var person = arr[i];
        if(person === "Harry Potter"){
        output.push("Gryffindor");
        }else if(person === "Voldemort"){
        output.push("Slytherin");
        }else{
        var house = houses[Math.floor(Math.random()*houses.length)]; //random house
        output.push(house);
        }
    }
    return output;
}


////////////////////
//// Unit Tests ////
////////////////////
// Unit tests for "sorting_hat" function 
// it should throw an error if argument given is not an array of strings (names) with at least 1 element **
// it should return another array of the same length as the given array **
// it should return an array consisting of only strings (names) of Hogwarts Houses ('Gryffindor','Hufflepuff', 'Ravenclaw','Slytherin **
// it should assign 'Gryffindor' to 'Harry Potter', if the name appears in the given array **
// it should assign 'Slytherin' to 'Voldemort', if the name appears in the given array**


describe ("sorting_hat", function(){
    it("should be function", function(){
        expect(sorting_hat instanceof Function).toBeTruthy();
    });

    it("should throw an Error if the argument is not an array of strings with at least 1 element", function(){
        expect(()=>sorting_hat([])).toThrow();
        expect(()=>sorting_hat(["hellow", 1])).toThrow();
    });

    it("should return another array with the same length as the given array", function(){
        var theArr = ["w", "a", "a", "b"];
        expect(sorting_hat(theArr).length).toBe(4);
    });

    it("should return an array consisting only of Hogwarts Houses", function(){
        var theArr = sorting_hat(["w", "a", "a", "b"]);
        sorting_hat(theArr);
        expect(theArr.indexOf("Gryffindor") > -1 || theArr.indexOf("Hufflepuff") 
        || theArr.indexOf("Slytherin") > -1 || theArr.indexOf("Ravenclaw") > -1
        ).toBeTruthy();
    });

    it("should assign 'Gryffindor' to 'Harry Potter' if the name appears in the list", function(){
        var theArr = ["Harry Potter"];
        expect(sorting_hat(theArr)).toContain("Gryffindor");
    });
    
    it("should assign 'Slytherin' to 'Voldemort' if the name appears in the list", function(){
        var theArr = ["Voldemort"];
        expect(sorting_hat(theArr)).toContain("Slytherin");
    });
    

});