let listOfBooks = [["book1","adarSh",2005],["book2","vaibhAv",2011],["book3","Srikant",2020]];
let newArray= listOfBooks.filter((elem,index) =>{ 
    if(listOfBooks[index][2] > 2010){
        return listOfBooks[index];
    }
    
  })

// console.log(listOfBooks[0][2]);
newArray.map((e,i) => {
    console.log(newArray[i][1].toLocaleUpperCase()); 
    

})
  console.log(newArray);

// let a = [1,2,4,5];
// let b= a.filter((e) => {
//     return e>2;
// })
// console.log(b);