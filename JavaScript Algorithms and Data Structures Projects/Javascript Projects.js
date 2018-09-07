JavaScript Algorithms and Data Structures Projects: Palindrome Checker



function palindrome(str) {
  
// Good luck!


   let newStr = str.replace(/[\W_]/g, "").toLowerCase();

   let reverse = newStr.split("").reverse().join("");



	return newStr === reverse;

 


}





palindrome("eye"); 
