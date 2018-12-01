

const START_BALANCE = 1000.00;
var balance = START_BALANCE;

function getCost() {

  // How do I get input from the keyboard in node?
 }

function purchase(cost) {
  if( cost < balance) {
    balance = balance - cost;
  } else {
    console.log("You cannot afford that.")
  }
}
var i = 0;
var costs = [300, 20, 250, 15, 300, 40, 1000, 20];
while( balance > 1 && i < costs.length ) {
  // var cost = getCost();
    purchase(costs[i]);
    console.log( "Cost " + costs[i] + " \n Balance remaining: " + balance + "\n\n" );
  i++;
  }

