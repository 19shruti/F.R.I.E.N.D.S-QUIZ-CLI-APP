var readlineSync=require('readline-sync');
var chalk=require('chalk');

var qu=readlineSync.question("May i know your name ?");
console.log(chalk.red.bold("welcome ! " + qu));
console.log(chalk.green.bold(" \n lets see how much know about the series F.R.I.E.N.D.S  \n "));


console.log(chalk.green.bold("RULES !! "));
console.log("1.Total 10 questions are their , have to attempt all ");
console.log("2. If you give correct answer you will score +2 otherwise you will score -1");
console.log("3. You have to type the index value of the answer ")
//question list
var questionlist=[
		{
			
		array:["big fat goalie","big fat monica","goalie","goalie mon"],
		question:chalk.magenta.bold("QUESTION 1 :: What was monicas nickname when she was a field hockey goalie ?"),
		answer:"big fat goalie"
	},
		{
		array:["1999","1994","1987","1991"],
		question:chalk.magenta.bold("QUESTION 2 ::  What year did Friends first start?"),
		answer:"1994"
	},
		{
			
		array:["18 pages (front and back)","20 pages (front and back)","12 pages (front and back)","16 pages (front and back)"],
		question:chalk.magenta.bold("QUESTION 3 :: How many pages was Rachel’s letter to Ross about the reasons for their break-up?"),
		answer:"18 pages (front and back)"
	},
		{
		
		array:["london","rome"," Italy","europe"],
		question:chalk.magenta.bold("QUESTION 4 :: Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?"),
		answer:" Italy"
	},
		{
		
		array:["gellar","Buffay","roy","bing"],
		question:chalk.magenta.bold("QUESTION 5 :: What is Phoebe’s surname?"),
		answer:"Buffay"
	},
		{
			
		array:["London","New York","rome","italy"],
		question:chalk.magenta.bold("QUESTION 6 :: In which city is Friends set?"),
		answer:"New York"
	},
		{
	
		array:["Central Perk","baba ka dhaba","tea shop","coffee mocha"],
		question:chalk.magenta.bold("QUESTION 7 ::Where does Gunther work?"),
		answer:"Central Perk"
	},
		{
		
		array:["rabbit","baby duck","duck","monkey"],
		question:chalk.magenta.bold("QUESTION 8 :: Who is Marcel?"),
		answer:"monkey"
	},
		{
			
		array:["joey","Ross","chandler","mike"],
		question:chalk.magenta.bold("QUESTION 9 :: Which of the Friends kisses one of the other’s mothers in season one?"),
		answer:"Ross"
	},
		{
			
		array:["Rachel","joey","ross","Chandler"],
		question:chalk.magenta.bold("QUESTION 10 :: Who Don't share food ?"),
		answer:"joey"
	},
];
//function 
var score=0;
function Play(listOfQue,ques,ans){
	// readlineSync.keyInSelect() .This function will take two parameters, the list of options to display it to the user and the question. 
	var userAns=readlineSync.keyInSelect(listOfQue,ques);
	if(listOfQue[userAns]===ans)
	{
		score+=2;
	console.log(chalk.green.bold("correct , score:: "+ score));
	}
	else
	{
		score-=1;
console.log(chalk.green.bold("wrong ! the ans is "+ans+ " your score is :: "+score));
	}

	if(score===6)
	{
		console.log(chalk.bgYellow("congrats ! u r in level 1"));
	}
	else if(score===12)
	{
		console.log(chalk.bgYellow("congrats ! u r in level 2"));
	}

}

//loop 
for(let i=0;i<questionlist.length;i++)
{
	console.log (chalk.yellow("-----------------------------------------------------------"));
	Play(questionlist[i].array ,questionlist[i].question,questionlist[i].answer);
	console.log(chalk.yellow("\n --------------------------------------------------------------\n "));
}

console.log(chalk.bgYellow("congratulations ! "+ qu + "  your score is "+ score ) );

highScore=[
	{
	name: "RITU",
	score:"18"
	}
];
console.log(chalk.yellow("\n HIGHSCORE \n "));
console.table(highScore);
var max=highScore[0].score;
for(let i=1;i<highScore.length;i++)
{
	if(highScore[i].score>max){
		max=highScore[i].score;
	}
}

if(score>=max)
{
	console.log(chalk.bgYellow.bold("\n CONGRATS !! You beat the HIGH SCORE \n "));
}
else{
	console.log(chalk.bgYellow.bold("\n you can't beat the HIGH SCORE ! TRY AGAIN \n "));
}