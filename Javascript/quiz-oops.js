function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.getQuestion = function(){
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.guess = function(answer){
	if(this.getQuestion().isCorrectAnswer == answer){
		this.score++;
	}
}

Quiz.prototype.hasEnded = function(){
	return this.questions.length <= this.currentQuestionIndex + 1;
}