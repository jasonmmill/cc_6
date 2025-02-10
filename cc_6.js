// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold
}
console.log(`Total Profit: $${calculateProfit(20,30,100)}`)