const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"


// Use string template literal syntax to create the following sentence from the variables above:

// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. 
// In 25 years I'll be 55!
//  I guess that means I'll be a milleni-old then. Ha ha!"

console.log(`"Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. 
In ${timeSpan} years I'll be ${futureAge}!
  I guess that means I'll be a ${dadJoke} then. Ha ha!"`)