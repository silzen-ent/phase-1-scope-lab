// Write your solution in this file!
// Test 1: 
var customerName = 'bob';

// Test 2: 
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 

    // notice that there is no return statement

    // if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable! 

    // This is because we used var in our 1st declaration, which isn't block-scoped. 
    // Also, we didn't declare using const or let in our 2nd declaration, making it global-scoped. 
}   

// Test 3: bestCustomer is globally scoped b/c we didn't use const or let. 
function setBestCustomer(){
    bestCustomer = 'not bob'
}

// Test 4: B/c it's globally scoped, we can accidentally overwrite the value of the variable. 
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

// Test 5: Now let's try that same thing using a const declaration. 
const leastFavoriteCustomer = 'some initial value'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'an attempt to change the declared const variable'
}
    // We'll get a TypeError (Assignment to constant variable) b/c we used const in our declaration.  

console.log(leastFavoriteCustomer) // => "some initial value"
console.log(changeLeastFavoriteCustomer()) // => "Type Error..."
