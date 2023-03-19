const prompt=require("prompt-sync")({sigint:true});


const url = /http:\/\/[a-z A-Z 0-9_\-\.]+[.][a-z]+/

let str = prompt("enter url ")
let a= url.test(str);

if(a==true){
    console.log("url is valid");
}
else{
    console.log("not valid");
}