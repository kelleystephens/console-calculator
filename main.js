function addd(x,y){return x + y;}
function subb(x,y){return x - y;}
function mult(x,y){return x * y;}
function div(x,y){return x / y;}

function expo(x,y){
  return Math.pow(x,y);
}

function sqr(x){return Math.sqrt(x);}

function fact(x){
  var i = x;
  while(i>0){
    i--;
    if(i > 0)
    x *= i;
  }
  return x;
}


alert("Welcome to the Console Calculator");
alert("Operators = +, -, *, /, exp, sqrt, !");
var op = prompt("Enter the logical operator you would like to use or q for quit");

while(op !== "q"){

  switch(op){
    case "+":
      var x = prompt("Please enter your first number");
      var y = prompt("Please enter your second number");
      x *= 1;
      y *= 1;
      console.log("The sum of " + x + " and " + y + " = " + addd(x,y));
      alert("The sum of " + x + " and " + y + " = " + addd(x,y));
      break;
    case "-":
      var x = prompt("Please enter your first number");
      var y = prompt("Please enter your second number");
      x *= 1;
      y *= 1;
      console.log("The subtraction of " + x + " and " + y + " = " + subb(x,y));
      alert("The subtraction of " + x + " and " + y + " = " + subb(x,y));
      break;
    case "*":
      var x = prompt("Please enter your first number");
      var y = prompt("Please enter your second number");
      x *= 1;
      y *= 1;
      console.log("The product of " + x + " and " + y + " = " + mult(x,y));
      alert("The product of " + x + " and " + y + " = " + mult(x,y));
      break;
    case "/":
      var x = prompt("Please enter your numerator");
      var y = prompt("Please enter your denominator");
      x *= 1;
      y *= 1;
      console.log("The quotient of " + x + " and " + y + " = " + div(x,y));
      alert("The quotient of " + x + " and " + y + " = " + div(x,y));
      break;
    case "exp":
      var x = prompt("Please enter the base number");
      var y = prompt("Please enter the exponential number");
      x *= 1;
      y *= 1;
      console.log("The exponitial of " + x + " to the " + y + " = " + expo(x,y));
      alert("The exponitial of " + x + " to the " + y + " = " + expo(x,y));
      break;
    case "sqrt":
      var x = prompt("Please enter your base number");
      console.log("The square root of " + x + " = " + sqr(x,y));
      alert("The square root of " + x + " = " + sqr(x,y));
      x *= 1;
      break;
    case "!":
      var x = prompt("Please enter your number");
      x *= 1;
      console.log("The factorial of " + x + " = " + fact(x,y));
      alert("The factorial of " + x + " = " + fact(x,y));
      break;
    case "q":
      alert("Thanks for using the Console Calculator!");
      break;
    default: alert("OOPS Commamd not valid. Try Again!")
      break;
  }  //end of switch
  op = prompt("Awesome! Choose another operator or q for quit");
}  //end of while loop
