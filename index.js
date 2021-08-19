const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials
      .map(tutorial => 
        tutorial.split(' ')
        .map(string => 
          string[0].toUpperCase() + string.substring(1))
        .join(' '))
}


//const titleCased = (array) => {}

  // 1. Split array into strings
  // 2. Split strings into words
  // 3. Loop through words and capitalize each first letter
  // 4. Recombine new capitalized strings into an array
  //return tutorials




// console.log(

//   tutorials.split(' ')
//      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//      .join(' ')
  
//   )