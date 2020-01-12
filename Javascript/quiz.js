// // operators array
// var operators = ['+','-','*','/','%'];

// var timer = parseInt(prompt("Total time alloted to the quiz in seconds!"));
// var question_count = parseInt(prompt("How many questions do you want?"));


// var given_answer;
// var actual_answer;

var questions = [
	['Number of states in India', 28],
	['National Game', 'Hockey'],
	['Captain of Indian Cricket Team', 'Virat Kohli']
]

var correct = [], wrong = [];

for(var i=0; i < questions.length; i++){
	var answer = prompt(questions[i][0]);
	if (answer ==  questions[i][1]){
		correct.push(questions[i][0]);
	}else{
		wrong.push(questions[i][0]);
	}
}

document.write("Correct answers : " + correct.length);
document.write("<ol>");
for (var i = 0; i < correct.length ; i++) {
	document.write("<li>" + correct[i] + "</li>");
}
document.write("</ol>");

document.write("wrong answers : " + wrong.length);
document.write("<ol>");
for (var i = 0; i < wrong.length ; i++) {
	document.write("<li>" + wrong[i] + "</li>");
}
document.write("</ol>");