// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("theCoder", () => {
    it("returns a string with a coded message.", () => {
      expect(theCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(theCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(theCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// Input: takes in a string
// Output: retunrs a string that has been encrypted.
// Psuedo Code: create a function that turn my string into a array so i can change aech value per index using .split to break it into an array. use an if statement to iterate thru the array and change the value based on {  "a" to 4, "e" to 3, "i" to 1, and "o" to 0.  } 



const theCoder = (string)=> {
    newArray = string.split('')
    
    
    const modifiedArray = newArray.map((char) => {
        if (char == "a") {
          return "4";
        } else if (char == "E") {
          return "3";
        } else if (char == "i") {
          return "1";
        } else if (char == "o") {
          return "0";
        } else if (char == "e") {
            return "3";
        } else {
          return char;
        }
      });
    
      return modifiedArray.join("");
    };
    
    console.log(theCoder(secretCodeWord1)); // "L4ck4d41s1c4l"
    console.log(theCoder(secretCodeWord2))
    console.log(theCoder(secretCodeWord3))
    
    
    
    


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("partLetter", () => {
    it("returns an array of all the words containing that particular letter.", () => {
      expect(partLetter(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(partLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })




// Expected output: ["Mango", "Apricot", "Peach"]

// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Input: an array
// Output: returns the indexes that had the same char
// Psuedo Code: makea  function that will check to see if the array value has a specific letter with in it and return that value back . 
// i can use the .filter method to filter out any index that doesnt have it.
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
const letterE = "e"



const partLetter = (array,string) => {
return array.filter((value) => value.toLowerCase().includes(string))
 

}
  console.log(partLetter(fruitArray,letterA))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("determines whether or not the array is a 'full house'", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// Input: an array of numbers
// Output: whether or not the array is a "full house"

// Psuedo Code: create an higher order funtion  that first creates an empty object called counts to store the number of occurrences of each number in the input array.then loops throuhg the input array and increments the count for each number in the counts object.After that the  function checks if there are three of one number and two of another by looping through the values of the counts object and setting  Let hasThree and hasTwo to true if the  count is found. Finally, the function returns true if both lets are set to true, showing  full house, and false otherwise.






function fullHouse(numbers) {
 // creates an empty object called counts
   const counts = {};

  // loop through the numbers array and increment counts
  for (const number of numbers) {
    counts[number] = (counts[number] || 0) + 1;
  }

  // creates hasThree and hasTwo as false
  let hasThree = false;
  let hasTwo = false;

    // loop through the values in counts
  for (const count of Object.values(counts)) {
    if (count === 3) {
      hasThree = true;
    } else if (count === 2) {
      hasTwo = true;
    }
  }
    // return true if both hasThree and hasTwo are true, else return false

  console.log(hasThree && hasTwo)
  return hasThree && hasTwo;
  
}