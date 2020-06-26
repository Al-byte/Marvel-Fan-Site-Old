const startButton = document.getElementById('start-btn')
const restartButton = document.getElementById('restart-btn')
const nextButton = document.getElementById('next-btn')
const resultsButton = document.getElementById('results-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let imageElement = document.getElementById('image');
let resultsElement = document.getElementById('results');
let messageElement = document.getElementById('message');
let text = document.getElementById('text');
const bannerElement = document.getElementById('banner');
const titleElement = document.getElementById('title');
const successElement = document.getElementById('success');
const failureElement = document.getElementById('failure')
let resultsTextElement = document.getElementsByClassName('results');

let shuffledQuestions, currentQuestionIndex, shuffledAnswers;
let score;

window.onbeforeunload = function() {
  window.scrollTo(0,0);
  return "Data will be lost if you leave the page, are you sure?";
};

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
  text.classList.add('hide');

})

resultsButton.addEventListener('click', showResults)


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
  resultsElement.classList.add('hide');
  messageElement.classList.add('hide');
  restartButton.classList.add('hide')
  score = 0;
  text.classList.add('hide');
  answerButtonsElement.classList.remove('hide');
  imageElement.classList.remove('hide');
  bannerElement.classList.add('hide');
  titleElement.classList.add('hide');
  questionElement.classList.remove('hide');
  successElement.classList.add('hide');
  failureElement.classList.add('hide');
  window.scrollTo(0,0);      
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    imageElement.src = question.img;
      questionElement.innerText = question.question;
      question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.setAttribute('class', 'choice');
    button.innerText = answer.text;
    button.classList.add('quiz-btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;

    } 
    button.addEventListener('mousedown', selectAnswer);

    answerButtonsElement.appendChild(button)
  })

}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  answerButtonsElement.disabled = false;
}



function selectAnswer(e) {
    if(!answerButtonsElement.disabled){
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  text.classList.remove('hide');
  //window.scrollTo(0,70);
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resultsButton.classList.remove('hide')  
  }
    if (correct) {
        score += 4;
        text.innerHTML = 'That is correct!';
        selectedButton.style.backgroundColor = 'green';

    } else {
        text.innerHTML = 'That is incorrect.';
        selectedButton.style.backgroundColor = 'red';

    }
    answerButtonsElement.disabled = true;
    }

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  /*if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }*/
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


function showResults() {
    questionContainerElement.classList.add('hide');
    resultsElement.classList.remove('hide');
    imageElement.classList.add('hide');
    window.scrollTo(0,0);
    titleElement.classList.remove('hide')
    messageElement.classList.remove('hide');
    if (score < 80) {
      titleElement.innerHTML = `Your final score is ${score}%.`      
      messageElement.innerHTML = `Better luck next time.`;  
      failureElement.classList.remove('hide');
    } else {
      titleElement.innerHTML = `Your final score is ${score}%!`
      messageElement.innerHTML = `Congratulations! You're a true Marvel nerd.`;
      successElement.classList.remove('hide');      
    }
    resultsButton.classList.add('hide');
    restartButton.classList.remove('hide');
    questionElement.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    text.classList.add('hide');
}

const questions = [
  {
    question: 'Who helped Tony escape from the cave in Afghanistan?',
    answers: [
      { text: 'Dr. Doom', correct: false },
      { text: 'Dr. Erskine', correct: false },
			{ text: 'Dr. Yinsen', correct: true },
      { text: 'Dr. Selvig', correct: false }

    ],
		img: './images/1.jpg'
  }, 
  {
    question: 'Which form of radiation do the Infinity Stones emit?',
    answers: [
      { text: 'Delta', correct: false },
      { text: 'Beta', correct: false },
      { text: 'Alpha', correct: false },
      { text: 'Gamma', correct: true }
    ],
		img: './images/2.jpg'
  },
  {
    question: "What is Tony's armored suit made of?",
    answers: [
      { text: 'Titanium', correct: true },
      { text: 'Vibranium', correct: false },
      { text: 'Uru', correct: false },
      { text: 'Adamanatium', correct: false }
    ],
		img: './images/3.jpg'
  },
  {
    question: 'Where did Mjolnir land when Thor was banished from Asgard?',
    answers: [
      { text: 'Jotenheim', correct: false },
      { text: 'New York', correct: false },
      { text: 'Malibu', correct: false },
      { text: 'New Mexico', correct: true }

    ],
		img: './images/4.jpg'
  },
	 {
    question: 'Who was the first leader of the Nazi scientist division during World War II?',
    answers: [
      { text: 'Arnim Zola', correct: false },
      { text: 'Pietro Maximoff', correct: false },
	    { text: 'Johann Schmidt', correct: true },
      { text: 'Adolf Hitler', correct: false }

    ],
		img: './images/5.jpg'
  },
	 {
    question: 'Who warned Thanos that "to challenge humans was to court death"?',
    answers: [
      { text: 'Loki', correct: false },
      { text: 'Ronan', correct: false },
	    { text: 'The Other', correct: true },
      { text: 'Ultron', correct: false }

    ],
		img: './images/6.jpg'
  }, {
    question: 'Which condition did Tony develop following the Battle of New York?',
    answers: [
      { text: 'Depression', correct: false },
      { text: 'PTSD', correct: true },
	    { text: 'Anger', correct: false },
      { text: 'Alcoholism', correct: false }

    ],
		img: './images/7.jpg'
  },

		 {
    question: "What's the name of the world tree that connects the 9 realms?",
    answers: [
      { text: 'Nidavellir', correct: false },
      { text: 'Ragnarok', correct: false },
	    { text: 'Bifrost', correct: false },
      { text: 'Yggdrasil', correct: true }

    ],
		img: './images/8.jpg'
  },
		 {
    question: 'What event takes place every few thousand years when the 9 realms are in perfect alignment?',
    answers: [
      { text: 'Eclipse', correct: false },
      { text: 'Equinox', correct: false },
	    { text: 'Harvest', correct: false },
      { text: 'Convergence', correct: true }

    ],
		img: './images/9.jpg'
  }, 		 {
    question: 'Who was the double agent who was a high-ranking member of S.H.I.E.L.D. before defecting to HYDRA.?',
    answers: [
      { text: 'Nick Fury', correct: false },
      { text: 'Bucky Barnes', correct: false },
	    { text: 'Hank Pym', correct: false },
      { text: 'Alexander Pierce', correct: true }

    ],
		img: './images/10.jpg'
  },
		 {
    question: "Where is The Collector's museum?",
    answers: [
      { text: 'Xandar', correct: false },
      { text: 'Morag', correct: false },
	    { text: 'Knowhere', correct: true },
      { text: 'Sakaar', correct: false }

    ],
		img: './images/11.jpg'
  }, 		 {
    question: "Who showed Tony the vision of the future where The Avengers failed?",
    answers: [
      { text: 'Loki', correct: false },
      { text: 'Ultron', correct: false },
	    { text: 'Vision', correct: false },
      { text: 'Wanda', correct: true }

    ],
		img: './images/12.jpg'
  },
		 {
    question: "Where was Janet van Dyne thought to have been lost forever?",
    answers: [
      { text: 'Phantom Zone', correct: false },
      { text: 'Nether Realm', correct: false },
	    { text: 'Quantam Realm', correct: true },
      { text: 'Twilight Zone', correct: false }

    ],
		img: './images/13.jpg'
  }, 		 {
    question: "Who was the mastermind who was mostly responsible for turning The Avengers against each other?",
    answers: [
      { text: 'Klaue', correct: false },
      { text: 'Killmonger', correct: false },
	    { text: 'Strucker', correct: false },
      { text: 'Zemo', correct: true }

    ],
		img: './images/14.jpg'
  },
		 {
    question: 'Where does Doctor Strange keep the Time Stone for safekeeping?',
    answers: [
      { text: 'Eye of Agomotto', correct: true },
      { text: "Vision's forehead", correct: false },
	    { text: 'The Orb', correct: false },
      { text: 'Scepter', correct: false }

    ],
		img: './images/15.jpg'
  }, 		 {
    question: "Which building did Peter Parker rescue his friends from on their class trip to Washington D.C.?",
    answers: [
      { text: 'The Lincoln Memorial', correct: false },
      { text: 'Washington Monument', correct: true },
	    { text: 'The Library of Congress', correct: false },
      { text: 'The Jefferson Memorial', correct: false }

    ],
		img: './images/16.jpg'
  },
		 {
    question: "Who reveals themselves to be Peter Quill's father?",
    answers: [
      { text: 'Yondu Udonta', correct: false },
      { text: 'Adam Warlock', correct: false },
	    { text: 'David Hasselhoff', correct: false },
      { text: 'Ego', correct: true }

    ],
		img: './images/17.jpg'
  }, {
    question: 'Following the events of Captain America: Civil War, where did Steve Rogers take Bucky for his safety?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'Asgard', correct: false },
	    { text: 'Wakanda', correct: true },
      { text: 'New York', correct: false }

    ],
		img: './images/18.jpg'
  },
		 {
    question: "What is the name of The Grandmaster's tournament?",
    answers: [
      { text: 'The Clash of The Titans', correct: false },
      { text: 'The Ultimate Alliance', correct: false },
	    { text: 'The Final Countdown', correct: false },
      { text: 'Contest of Champions', correct: true }

    ],
		img: './images/19.jpg'
  }, {
    question: "Who was the first to challenge T'Challa for the title of Black Panther and the throne of Wakanda?",
    answers: [
      { text: "T'Chaka", correct: false },
      { text: "M'Baku", correct: true },
	    { text: 'Killmonger', correct: false },
      { text: 'Shuri', correct: false }

    ],
		img: './images/20.jpg'
  },
		 {
    question: "What's the name of Thanos' most devout followers?",
    answers: [
      { text: 'The Black Order', correct: true },
      { text: 'Legion of Doom', correct: false },
	    { text: 'The Brotherhood', correct: false },
      { text: 'The Dark Elves', correct: false }

    ],
		img: './images/21.jpg'
  }, {
    question: 'Where does Eitri the Dwarf live?',
    answers: [
      { text: 'Vanaheim', correct: false },
      { text: 'Nidavellir', correct: true },
	    { text: 'Vormir', correct: false },
      { text: 'Jotenheim', correct: false }

    ],
		img: './images/22.jpg'
  },
		 {
    question: 'Which Infinity Stone was responsible for granting Captain Marvel her powers?',
    answers: [
      { text: 'Reality Stone', correct: false },
      { text: 'Power Stone', correct: false },
	    { text: 'Mind Stone', correct: false },
      { text: 'Space Stone', correct: true }

    ],
		img: './images/23.jpg'
  }, {
    question: 'How did Scott Lang return from the Quantam Realm in 2023?',
    answers: [
      { text: 'Hank Pym', correct: false },
      { text: 'A Rat', correct: true },
	    { text: 'Antony', correct: false },
      { text: 'Thanos', correct: false }

    ],
		img: './images/24.jpg'
  }, {
    question: 'Which program did Mysterio use to pull off his reality augmenting effects?',
    answers: [
      { text: 'E.D.I.T.H.', correct: false },
      { text: 'J.A.R.V.I.S.', correct: false },
	    { text: 'B.A.R.F.', correct: true },
      { text: 'F.R.I.D.A.Y.', correct: false }

    ],
		img: './images/25.jpg'
  }
]