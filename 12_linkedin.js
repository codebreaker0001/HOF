const prompt = require("prompt-sync")({sigint:true});

const linkedinUrl = /https:\/\/www.linkedin.com\/in\/[a-z A-Z 0-9+_\-\.]+[a-z A-Z 0-9]/gi

let profileID = prompt("enter Linkedin ID");

let check = linkedinUrl.test(profileID)
console.log(check);

if(check == true){
    console.log("Valid Linkedin Profile");
}
else{
    console.log("Not a Valid Linkedin Profile");
}

