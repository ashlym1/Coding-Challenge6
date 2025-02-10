
// Task 1 Function Declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold)
 {  let profit = (sellingPrice - costPrice) * unitsSold; 
 return profit; }  // Calculating the total profit 
//TEST DATA 
console.log(calculateProfit(20, 30, 100)) ; // Answer shoulf be  $1000"
console.log(calculateProfit(50,70,200)); // Answer should be $4000

// Task 2- Function Expression
const calculateSalesTax=function(amount,taxRate) { 
 return amount * taxRate ; // adding a return statement   
};
// Testing Data 
 console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

// Task 3- Arrow Functions 
const calculateBonus= (salary,performanceRating ) => {
     if (performanceRating === "Excellent") return salary *0.2; // calculating for bonus
    else if (performanceRating ==="Good") return salary * 0.1;
else if (performanceRating === "Average") return salary *0.05 
return 0; 
};

  // Testing Data
console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000")
console.log(calculateBonus(7000, "Good"));      // Expected output: "Bonus: $700" )

//Task 4- Parameters and Arguments
function calculateSubscriptionCost(plan,months,discount= 0 ) { 
    let pricePerMonth;
     if(plan==="Basic") pricePerMonth= 10; 
    else if(plan==="Premium")pricePerMonth = 20;
   else if (plan==="Enterprise") pricePerMonth= 50;
   else return "Invalid Plann";
let totalCost = (pricePerMonth * months)- discount;
return "Total Cost : $" + totalCost;
}
// Testing Data 
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Should say "Total Cost: $50" )
console.log (calculateSubscriptionCost("Premium", 12, 0)); // Should "Total Cost: $240")

//Task 5- Returning Values 
function convertCurrency(amount, exchangeRate) {
    let converted = amount * exchangeRate ;
    return `Converted Amount:$${converted.toFixed(2) } `// coverting currency 
}
// Testing Data 
console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00")
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50")

// Task 6- Higher-order Functions 
 let orders = [200, 600, 1200, 450, 800 ];// the array of orders 
 function applyBulkDiscount(orders,discountFunction) { 
    return orders.map(amount=>discountFunction(amount)); // Applies 10% discount on order 500 and above 
 }
 // Testing Data :
 console.log(applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount)); // expected : [200, 540, 1080, 450, 720]

//Task 7 - Closure 
 function createExpenseTracker  () {
    let totalExpenses= 0; 
    return function (expense) {
        totalExpenses += expense;
        return`Total Expenses: $${totalExpenses}`;
 };
}
       // Testing 
       let tracker=createExpenseTracker();
       console.log(tracker(200));//  total expense should be : 200
       console.log(tracker(150));// total expenses should be 350

// Task 8 - Recursion in Java Script 
 function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) return 0;
 } 
 /// testing
 console.log (`Years to level 10:${calculateYearsToPromotion(7)}`); // Answer:  "Years to Level 10: 6")
 console.log (`Years to level 10:${calculateYearsToPromotion(5)}`); // Expected output: "Years to Level 10: 10")
