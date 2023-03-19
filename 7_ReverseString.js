const prompt=require("prompt-sync")({sigint:true});
function revStr(strt){ 
    let arr1 = Array.from(strt);
    console.log(arr1);
     let arr2 = arr1.reverse();
    //   console.log(strt.split('').reverse().join(''));
    console.log(arr2.join(''));
}
let strt = prompt("enter a string ")
console.log(strt.length);

// let ref = revStr(strt);
setTimeout(() => revStr(strt), 2000);

