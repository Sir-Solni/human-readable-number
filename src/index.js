// module.exports = function toReadable (number) {
//  // defining numbers in words
//  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//  var two_digit_numbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//  var hundred = 'hundred';
//  var thousand = 'thousand';
//  var million = 'million';
//  var billion = 'billion';

//  // if number is 456, then 4 is third_digit, 5 is sesond_digit, 6 is first_digit
//  var third_digit = Math.trunc(number / 100);
//  var second_digit = Math.trunc((number % 100) / 10);
//  var first_digit = (number % 100) % 10;


//  // from 0 to 19
//  if (0 <= number && number <= 19) {
//      return numbers[number];
//  }
//  // from 20 to 99
//  else if (20 <= number && number <= 99) {
//      if (number % 10 === 0) {
//          return two_digit_numbers[second_digit - 2];
//      } else return two_digit_numbers[second_digit - 2] + ' ' + numbers[first_digit];
//  }
//  // from 100 to 999
//  else if (number >= 100) {
//      if (number % 100 < 20 && number % 100 != 0) {
//          return numbers[third_digit] + ' ' + hundred + ' ' + numbers[number % 100];
//      } else if (number % 100 == 0) {
//          return numbers[third_digit] + ' ' + hundred;
//      } else if (number % 10 === 0) {
//          return numbers[third_digit] + ' ' + hundred + ' ' + two_digit_numbers[second_digit - 2];
//      } else if (number % 100 >= 20) {
//          return numbers[third_digit] + ' ' + hundred + ' ' + two_digit_numbers[second_digit - 2] + ' ' + numbers[first_digit];
//      }
//  }


// }



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