// // //
//
// var userName = prompt('what\'s your name?');
// alert ('Hello ' + userName + '. Thanks for coming to my site!');
//
// //questionOne
// var questionOne = prompt('Was I born in India?').toUpperCase();
// if (questionOne === 'YES' || questionOne === 'Y'){
//   alert('Correct!');
// }else{
//   alert('Wrong!');
// }
// //answeOne
// console.log('Answer 1)Yes, India');
//
// //questionTwo
// var questionTwo = prompt('Is my fav color blue?').toUpperCase();
// if (questionTwo === 'YES' || questionTwo === 'Y'){
//   alert('Correct!');
// }else{
//   alert('Wrong!');
// }
// //answerTwo
// console.log('Answer 2)Yes, blue');
//
// //questionThree
// var questionThree = prompt('do I like Apple products?').toUpperCase();
// if (questionThree === 'YES' || questionThree === 'Y'){
//   alert('Correct!');
// }else{
//   alert('Wrong!');
// }
// //answerThree
// console.log('Answer 3)Yes, I do like Apple products')
//
// //questionFour
// var questionFour = prompt('do I have hobbies?').toUpperCase();
// if (questionFour === 'YES' || questionFour === 'Y'){
//   alert('Correct!');
// }else{
//   alert('Wrong!')
// }
// //answerFour
// console.log('Answer 4)Yes');
//
// //end of 4 question and answers
//
//
// //lab,2,question_5_n_6
//
// //questionFive
// var questionFive = prompt('Is my hobbie, A) Collecting car\'s?, B) Collecting watche\'s? , or C) Collecting Jordan\'s? ');
//
// if (questionFive === 'B' || questionFive === 'Collecting watche\'s' || questionFive === 'B) Collecting watche\'s' || questionFive === 'B)' || questionFive === 'b') {
//   alert('Yes, I do collect watche\'s!');
// } else if (questionFive === 'C' || questionFive === 'Collecting Jordan\'s' || questionFive === 'C) Collecting Jordan\'s') {
//   alert('Sorry, I hate Jordan\'s');
// }else{
//   alert('no not yet, but I hope to in the future');
// }
// //answerFive
// console.log('answer B) Collecting watche\'s');
//
//
// questionSix


//how many watches do I own?
var questionSix = prompt('how many watche\'s are in my collection?');
console.log("user answer is", questionSix);

var userGuess = questionSix;
console.log("assign value of questionSix to var userGuess", (userGuess === questionSix));

var answerSix = 5;
//compare userGuess to answerSix and prompt appropriate respone
if( userGuess === answerSix) {
  alert("good job");
} else if (userGuess < answerSix) {
  alert("too low");
} else (userGuess > answerSix); {
    alert("too high");
}

//ASSIGN A VALUE TO THE ANSWER
// var answer6 = 5;
// if ( questionSix < 5);
//   alrt('too low');
// //
// }
// if (.indexOf(questionSix) !== -1){
//   alert('Sorry not correct!');
// } else {
//   alert('That is correct');
// }
//

//
