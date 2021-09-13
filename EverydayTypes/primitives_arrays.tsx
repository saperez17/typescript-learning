//Typescript has types for all JS primitives
const age : number = 24;
let my_name: string = "Santiago";
let isDev : boolean = true;

//Arrays. We can specify an array type using the square-brackets notation
let students : string[] = ["Ale", "Chris", "Lyevi"]
let houseNumbers : number[] = [17,24,35]

//Special type: any
let obj : any = { friends: ["Nico", "Sebas"] };

//None of these lines throw compiler errors as it is assumed that the obj variable can be of any type.
obj.foo();
obj();
obj.var = 100;
const n : number = obj;


