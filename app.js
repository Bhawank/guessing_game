//
var userName = prompt('what\'s your name?');
alert ('Hello ' + userName + '. Thanks for coming to my site!');
//answeOne
console.log('answer 1)India');
//questionOne
var questionOne = prompt('where was I born?');
if (questionOne === 'India' || questionOne === 'India'){
  alert('Correct!');
}else{
  alert('Wrong!');
}
//answerTwo
var answerTwo = 'blue';
console.log('answer 2)blue');
//questionTwo
var questionTwo = prompt('what\'s my favorite color?');
if (answerTwo === questionTwo){
  alert('Correct!');
}else{
  alert('Wrong!');
}
//answerThree
console.log('answer 3)Mac')
//questionThree
var questionThree = prompt('do I like Mac or PC?');
if (questionThree === 'mac' || questionThree === 'Mac'){
  alert('Correct!');
}else{
  alert('Wrong!');
}
//answerFour
// var answerFour = 'yes' && 'Yes' && 'y';
// var answerFour = 'y';
console.log('answer 4)yes');
//questionFour
var questionFour = prompt('do I have hobbies?');
if (questionFour === 'y' || questionFour === 'yes' || questionFour === 'Yes'){
  alert('Correct!');
}else{
  alert('Wrong!')
}
//end of 4 question and answers

//lab,2,question_5_n_6
//questionFive
var questionFive = prompt('Is my hobbie, A) Collecting car\'s?, B) Collecting watche\'s? , or C) Collecting Jordan\'s? ');
//answerFive
console.log('answer 5)B) Collecting watche\'s');
//
if (questionFive === 'B' && questionFive === 'Collecting watche\'s' && questionFive === 'B) Collecting watche\'s' && questionFive === 'B)' || questionFive === 'b') {
  alert('Yes, I do collect watche\'s. I currently have 5 watche\'s in my collection');
} else if (questionFive === 'C' || questionFive === 'Collecting Jordan\'s' || questionFive === 'C) Collecting Jordan\'s') {
  alert('Sorry, I hate Jordan\'s');
}else{
  alert('no not yet, but I hope to in the future');
}
//questionSixArray

var questionSix = prompt('what is my favorite fruit?');
var a = ['apple', 'banana', 'pineapple', 'mango'];

// a.indexof('pinapple');
if (a.indexOf(questionSix) === -1){
  alert('Sorry not correct!');
} else {
  alert('That is correct');
}
console.log('index');
