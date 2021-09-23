var readlineSync = require("readline-sync")
const chalk = require("chalk")
var score=0;
var highScore =[8];

console.log(chalk.bold.blue("WELCOME TO BOLLYWOOD QUIZ"))

var player = readlineSync.question("What's your name? ").toUpperCase();
console.log("\n")
console.log(chalk.bold.blue("LET'S CHECK ") + player +"'S"+ chalk.bold.blue(" BOLLYWOOD KEEDA.........."));
console.log("\n")


var questionList = [
   questionOne = 
  {
    question: "The story of Kabhi Khushi Kabhie Gham revolves around the trials and tribulations of which family? ",
    answer: "B",
    A : "A. The Malhotras",
    B : "B. The Raichands",
    C : "C. The Singhanias",
    D : "D. The Oberois",
    playerAnswer : "",
  },
   questionTwo =
  {
    question: "In the movie Piku, what does Amitabh Bachchan's character (Bhashkor Banerjee) suffer from? ",
    answer: "D",
    A : "A. Cancer",
    B : "B. High Blood Pressure",
    C : "C. Arthritis",
    D : "D. Chronic Constipation",
    playerAnswer : "",
  },
   questionThree =
  {
    question: "In Hera Pheri, what was Paresh Rawal's character called?",
    answer: "D",
    A : "A. Raju",
    B : "B. Devi Prasad",
    C : "C. Shyam",
    D : "D. Baburao Ganpatrao Apte",
    playerAnswer : "",
   },
   questionFour =
  {
    question: "In Dear Zindagi, what does Shah Rukh Khan's character, Dr Jehangir Khan, do?",
    answer: "A",
    A : "A. He is a Therapist",
    B : "B. He is an Architect",
    C : "C. He is an Actor",
    D : "D. He is a Journalist",
    playerAnswer : "",
  },
   questionFive =
  {
    question: "Which movie is this popular line from:'Dosti ka ek usool hai madam - no sorry, no thank you.'",
    answer: "C",
    A : "A. Kuch Kuch Hota Hai",
    B : "B. DilWale Dhulaniya Le Jayege",
    C : "C. Maine Pyar Kiya",
    D : "D. Andaz Apna Apna",
    playerAnswer : "",
  },
   questionSix =
  {
    question: "In the movie Kahaani, which Indian city does Vidya Bagchi visit in order to search for her missing husband?",
    answer: "C",
    A : "A. Agra",
    B : "B. Mumbai",
    C : "C. Kolkata",
    D : "D. Chennai",
    playerAnswer : "",
  },
   questionSeven =
  {
    question: "Finish the quote from Om Shanti Om: 'Ek chutki sindoor ki keemat, tum kya jaano _____?'",
    answer: "C",
    A : "A. Om Babu",
    B : "B. Mahesh Babu",
    C : "C. Ramesh Babu",
    D : "D. Nalayak",
    playerAnswer : "",
  },

  questionEight =
  {
    question: "In Jab We Met, what is the name of Geet's cousin?",
    answer: "A",
    A : "A. Roop",
    B : "B. Simran",
    C : "C. Preet",
    D : "D. Priya",
    playerAnswer : "",
  },

  questionNine =
  {
    question: "What is the name of Saif's character from the movie Omkara?",
    answer: "D",
    A : "A. Om Babu",
    B : "B. Gabbar Singh",
    C : "C. Sardar Khan",
    D : "D. Langda Tyagi",
    playerAnswer : "",
  },

  questionTen =
  {
    question: "And finally, complete this groundbreaking lyric from the movie Hum Saath Saath Hain : ' ABCDEFGHIJKLMNOP__________I love you'",
    answer: "B",
    A : "A. RQSTUVWXYZ",
    B : "B. QRSTUVWXYZ",
    C : "C. PQRSTUVW",
    D : "D. LMNOP",
    playerAnswer : "",
  },
 ];

function playQuiz(questionList){
  for(var i=0;i<questionList.length;i++){
    if(response==="no"){
      break;
    }
    console.log(questionList[i].question)
    console.log(questionList[i].A)
    console.log(questionList[i].B)
    console.log(questionList[i].C)
    console.log(questionList[i].D)

    var playerAnswer = readlineSync.question(questionList[i].playerAnswer);

    if((playerAnswer.toUpperCase())===(questionList[i].answer).toUpperCase()){
      score = score+1;
      console.log(chalk.bold.green("YOU ARE RIGHT!!"))
      console.log("YOU SCORED : "+chalk.bold.green(score))
      console.log(".............................")
    }
    else{
      console.log(chalk.bold.red("YOU ARE WRONG!!"))
      console.log("Right answer is : "+chalk.bold.green(questionList[i].answer.toUpperCase()))
      console.log("YOU SCORED : "+chalk.bold.red(score));
      console.log(".............................")
    }
      var response = wishToContinue();
      
  }
  highScore.push(score)
  gameOver();
}

function wishToContinue(){
  var response = readlineSync.question("Do you wish to Continue?? ")
  if(response==="yes"){
    return response;
  }
  else{
    return response;
  }
 
}


function gameOver(){
   console.log(chalk.bold.blue("BOLLYWOOD QUIZ REACHES TO END.................."))
   console.log("YOUR BOLLYWOOD KEEDA METER REACHS AT : "+chalk.bold.green(score)+"      HIGHEST KEEDA METER SCORE : "+chalk.bold.green(highScore[0]))
   console.log(chalk.bold.blue("If you have beaten the highest score, SEND A SCREENSHOT!!!!"))
}

playQuiz(questionList);