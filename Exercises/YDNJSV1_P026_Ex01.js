

const START_BALANCE = 1000.00;
const MIN_BALANCE_TOLERATED = 10;
var balance = START_BALANCE;
var i = 0;
var costs = [300, 20, 250, 15, 300, 40, 1000, 20];
var totalCost = 0.0;
var success = true;

function getCost() {

  // How do I get input from the keyboard in node?
 }

function purchase(cost) {
  if( cost < balance) {
    balance = balance - cost;
    return true; // True means that transaction processed.
  } else {
    console.log("You cannot afford that.")
    return false; // False means that transaction was not processed.
  }
}

function calcTax(totalCost) {
return totalCost*.05
}

function formatMoney(amount) {
  var formattedAmount = amount.toString();
  formattedAmount = "$" + formattedAmount;
  return formattedAmount;
}

while( balance > MIN_BALANCE_TOLERATED && i < costs.length ) {
  // var cost = getCost();
    success = purchase(costs[i]);
    console.log( "Cost " + costs[i] + " \n In Loop Balance remaining: " + balance + "\n" );
    if (success) {
      totalCost = totalCost + costs[i];
    } else {
      break;
    }
    console.log( "Cost " + costs[i] + " \n In Loop Total Costs: " + totalCost + "\n" );
  i++;
  }

  console.log( "TotalCost " + totalCost + " \n Out Loop Balance remaining: " + balance + "\n\n" );
  totalCost = totalCost + calcTax( totalCost );
  console.log( "\n Out Loop TotalCost with tax: " + totalCost.toFixed(2) );
  console.log("Final total cost with formatting = " + formatMoney(totalCost) + ".")