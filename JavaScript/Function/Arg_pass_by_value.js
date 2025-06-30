/*
    pass by value me actual value pass hoti h. Agar usme pass krne ke baad kisi function me value change krne ke baad bhi original me changes nahi hote
*/

//1. Primitive Types are passed by Value
function changeVal(x) {
  x = 10;
}
let a = 5;
changeVal(a);
console.log(a); // Output: 5 (not changed)
 //Function ke andar x = 10 hone ka aapke original a pe koi effect nahi hua.
