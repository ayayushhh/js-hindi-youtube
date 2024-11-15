const accountId = 144553
let accountEmail = "ayushoct15@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;
//accountId = 2 not allowed

accountEmail = "at@gmail.com"
accountPassword = "3465346"
accountCity = "Gurugram"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountState, accountEmail, accountCity, accountPassword])