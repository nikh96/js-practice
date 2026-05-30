const accountId = 144553  
let accountEmail = "vindiesel@gmail.com"
var accountPassword = "99990"
accountCity = "Naigarhi"   // allows but not a good practice to do like it.
let accountState;

// accountId = 2 // not allowed

accountEmail = "nik@gmail.com"
accountPassword = "666555"
accountCity = "Indore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

