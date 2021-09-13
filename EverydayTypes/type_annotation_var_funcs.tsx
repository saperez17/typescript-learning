//Type annotation on variables can be automatically infered by TS, or explicitly written.
let petName : string = "Nilo";
let dogName = "Simon"; // -> whenever possible let TS automatically figure out the variable's type.

//Type annotation on functions
//Typing function parameters
function migrate(country:string){
    console.log(`You are now migrating to ${country}`);
}
migrate('US');

//Typing function return values
function withdrawMoney (balance:number):number{
    let newBalance = balance - 100;
    console.log(`Your new balance is ${newBalance}`);
    return newBalance
}
withdrawMoney(1000);
