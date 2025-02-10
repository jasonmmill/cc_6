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
let calculateBonus = (salary, performanceRanking) => { // create function and add paramenters
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
console.log(`Bonus: $${calculateBonus(70000,"Good")}`) // log results using template literal
