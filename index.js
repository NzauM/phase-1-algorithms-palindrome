function isPalindrome(word) {
  const wordLength = word.length
  let reverseWord = []
  for(let i=0; i < wordLength; i++){
      reverseWord.unshift(word[i])
  }
  console.log(reverseWord)
  const finalWord = reverseWord.join('')
  let palindrome;
  if (finalWord === word){
    palindrome = true
  }
  else{
    palindrome = false
  }
  console.log(palindrome)
  return palindrome
}

/* 
  Get a reverse of the given string
  check if the reverse string matches the original string
  Return true if it does, and false if otherwise
*/

/*
  Loop through the string 
  Add string characters to an array in a reverse order(unshift)
  Join the array to come up with a reverse string
  Compare reverse string to original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: some trash");
  console.log(isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
// isPalindrome()
