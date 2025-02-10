// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) { // create function and add parameters
    return (sellingPrice - costPrice) * unitsSold
}
console.log(`Total Profit: $${calculateProfit(20,30,100)}`) // log results using template literal

// Task 2: Function Expression
function calculateSalesTax(amount, taxRate) { // create function and add parameters
    return amount * taxRate
}
console.log(`Sales tax: $${calculateSalesTax(100,0.1)}`) // log results using template literal

