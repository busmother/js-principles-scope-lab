// Write your solution in this file!

var customerName = "bob";
// let bestCustomer = "some value";
const leastFavoriteCustomer = 'some initial value';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least favorite'
}