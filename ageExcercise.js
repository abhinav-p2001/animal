let age = 25;

function displayAge() { 
  console.log("Current age:", age);
}

function changeAge(newAge) { 
  age = newAge; 
  console.log("Updated age:", age);
}
displayAge(); 
changeAge(30); 
displayAge(); 