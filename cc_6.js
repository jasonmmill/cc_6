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

// Task 3: 
function calculateBonus(salary, performanceRanking) { // create function and add paramenters
    if (performanceRanking === "Excellent") { // use if statements to outline different options
        return salary * 0.2
    }
    if (performanceRanking === "Good") {
        return salary * 0.1
    }
    if (performanceRanking === "Average") {
        return salary * 0.05
    }
}
console.log(`Bonus: $${calculateBonus(5000,"Excellent")}`) // log results using template literal
console.log(`Bonus: $${calculateBonus(7000,"Good")}`) // log results using template literal

// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) { // create function and add parameters
    if (plan === "Basic") { // use if statements to outline different options
        return months * 10 - discount
    }
    if (plan === "Premium") {
        return months * 20 - discount
    }
    if (plan === "Enterprise") {
        return months * 50 - discount
    }
}
console.log(`Total Cost: $${calculateSubscriptionCost("Basic",6,10)}`) // log results using template literal
console.log(`Total Cost: $${calculateSubscriptionCost("Premium",12,0)}`) // log results using template literal

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) { // create function and add parameters
    return (amount * exchangeRate).toFixed(2) // fix currency to round to two decimals
}
console.log(`Converted Amount: $${convertCurrency(100,1.1)}`) // log results using template literal
console.log(`Converted Amount: $${convertCurrency(250,0.85)}`) // log results using template literal

// Task 6: High-Order Functions
let orders = [ 200, 600, 1200, 450, 800 ]; // create array
function discountFunction(orders, applyBulkDiscount) { // establish function and parameters
    return orders.map(applyBulkDiscount)
}
let applyBulkDiscount = (amount) => amount > 500 ? amount * 0.9 : amount // function as argument
let orderDiscount = discountFunction(orders, applyBulkDiscount)
console.log(orderDiscount) // log results

// Task 7: Closures
function createExpenseTracker() { // create function
    let runningTotal = 0;
    return function(expense) { // function inside of function
        runningTotal += expense; 
        return runningTotal; // answer
    }
}
let tracker = createExpenseTracker()
console.log(`Total Expenses: $${tracker(250)}`) // log results
console.log(`Total Expenses: $${tracker(150)}`) // log results

// Task 8: Recursion in JavaScript
function calculateYearsToPromotion(employeeLevel) { // create function and parameters
if (employeeLevel >= 10) { 
    return 0;
}
else {
    return (10 - employeeLevel) * 2; // function used to calculate years left
}
}
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`) // log results
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`) // log results