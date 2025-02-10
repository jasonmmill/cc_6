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