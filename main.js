
// Pizza order by Pranav

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - Get user input for pizza order
  let name = document.getElementById("name").value;
  let time = document.getElementById("time").value;
  let day = document.getElementById("day").value;
  let addressNum = document.getElementById("addressNum").value;
  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;
  let province = document.getElementById("province").value;
  let cardinaldirection = document.getElementById("NEWS").value;
  let country = document.getElementById("country").value;
  let postalcode = document.getElementById("postalcode").value;
  let creditcard = document.getElementById("credit").value;
  let cvc = document.getElementById("cvc").value;
  let exp = document.getElementById("exp").value;

  //Process - Create confirmation message using template strings
  let message = `hello ${name} !! have a great ${time} of ${day} at ${addressNum} ${street} ${cardinaldirection} ${city} ${province} ${country} ${postalcode}. I hope you are having a great ${day} with the credit card number ${creditcard} with cvc ${cvc} that expires on ${exp}. long live the Republic of Singapore!`
                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
                                                                                                          

  //Output
  document.getElementById("output").innerHTML = message;
}
