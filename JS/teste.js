var temperature = 10;

if (temperature > 20) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot.");
}


 for (i = 0; i < 5; i++){
    console.log(i)
 }

 var person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key]);
  }
}
