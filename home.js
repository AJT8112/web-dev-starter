let message = "Hello",
price = 49.99,
product = "Hiking boots",
discounted = false;

message += " World!"

message = message.toUpperCase();

message = message.substring(1);

//price += 1;

//price = 27.99;

//price = 19.99;

alert(typeof discounted);
//showMessage(message);
//showMessage(price);
console.log(product);

//CONVERT FROM NUMBER TO STRING DATA TYPE.

/*let amount = 123;
amount = amount.toString();
showMessage(amount); */

//CONVERT FROM STRING TO NUMBER DATA TYPE.

/* let amount = Number.parseFloat("123.45");
showMessage(typeof amount); */

//Objects

let person = {
    firstName: "Alex",
    secondName: "Thomas"
};
showMessage(person.firstName);

//CREATE FUNCTION DECLARATION
function displayMessage(){
    console.log("Function Added");
} //CALL to execute the function
displayMessage();
displayMessage();

//CREATE FUNCTION EXPRESSIONS
let fn = function(){
    console.log("Function expression");
} //CALL function expressions
fn();
fn();

//Pass info through FUNCTIONS
//function showMessages(message, anotherMessage){
//    console.log(message,anotherMessage)
//}
//Pass argument and call
console.log('first message', 'second message');

//functions to return values
function getSecretCode(value){
    let code = value * 42;
    return code;
}
console.log(getSecretCode(2));

//percentOff(30);

//OBJECT and intro to THIS

/*let persons = {
    name: "John",
    age: 32,
    partTime: false,
    showInfo: function(realAge){
        showMessage(this.name + " is " + realAge);
    }
};

persons.showInfo(34);*/

let persons = {
    name: "John",
    age: 32,
    partTime: false,
};

function incrementAge(p){
    p.age++;
}

incrementAge(persons);
console.log(persons.age);