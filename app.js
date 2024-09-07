// class Solution {
//     static main() {
//         console.log("Hello World!");
//     }
// }

//   2#

// function switchItUp(number){
//     switch(number) {
//       case 0:
//         return 'Zero';
//       case 1:
//         return 'One';
//       case 2:
//         return 'Two';
//       case 3:
//         return 'Three';
//       case 4:
//         return  'Four';
//       case 5:
//         return 'Five';
//       case 6:
//         return 'Six';
//       case 7:
//         return 'Seven';
//       case 8:
//         return 'Eight';
//       case 9:
//         return 'Nine';
//       default:
//         return 'Unknown number';
//     }
//   }


// 3#

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
//   }


//   4#

//   function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }


//   5#

//   function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };x


//   6#

//   function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
//   }


//   7#


//   function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
//   }


//   8#

//   const square = (n) => n * n;


//   9#

//   let alphanumeric = s => /^[a-z\d]+$/i.test(s);


//   10#

//   function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }