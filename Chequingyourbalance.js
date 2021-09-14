/*
var balance = 1010192;
var checkBalance = true;
var isActive = true;

if (checkBalance !== true){
console.log("Thank you. Have a nice day!");

} else if (isActive !== true) {
  console.log("Your account is no longer active");

} else if (balance ===0) {
  console.log("Your account is empty");

}else if (balance <0){
  console.log("Your balance is negative. Please contact bank")

}else if (checkBalance===true && isActive===true && balance>=1){
  console.log("Your balance is $"+balance.toFixed(2)+".")
}
*/
var balance = -100;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive !== false && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive !== true) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

