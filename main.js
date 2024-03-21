
// Pizza order by Pranav

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - Get user input for pizza order
  let name = document.getElementById("name").value;
  let time = document.getElementById("time").value;

  //Process - Create confirmation message using template strings
  let message = `hello ${name} !! have a great ${time}. long live the Republic of Singapore!`
                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
                                                                                                          

  //Output
  document.getElementById("output").innerHTML = message;
}
