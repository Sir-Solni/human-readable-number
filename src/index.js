
module.exports = function toReadable (number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let firstDigit = (number % 100) % 10;  
let secondDigit = Math.trunc((number % 100) / 10);
let thirdDigit = Math.trunc(number / 100);
    
if (0 <= number && number <= 19) {
return numbers[number]; 
 }
 let twoDigit = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (20 <= number && number <= 99) {
    if (number % 10 === 0) {
      return twoDigit[secondDigit - 2];
    }
    else {
      return twoDigit[secondDigit - 2] + " " + numbers[firstDigit];
    }
  }
  
 let threeDigit = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (100 <= number && number <= 999) {
    if (number % 100 === 0) {
      return threeDigit[thirdDigit - 1];
    } else if ( number % 100 < 20 && number % 100 !== 0) {
      return threeDigit[thirdDigit - 1] + ' ' + numbers[number % 100];
    } else if ((number % 100) % 10 === 0){
      return threeDigit[thirdDigit - 1] + ' ' + twoDigit[((number % 100) / 10) - 2];
    }
    
    else {
      return threeDigit[thirdDigit - 1] + ' ' + twoDigit[secondDigit - 2] + " " + numbers[firstDigit];
    }
    
  }  
  
  
 }