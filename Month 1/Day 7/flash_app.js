const flashcards = [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" },
  { question: "What is JavaScript?", answer: "Programming language of the Web" },
];

let currentIndex = 0;

const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const flashcard = document.getElementById("flashcard");

function renderCard(index) {
  front.textContent = flashcards[index].question;
  back.textContent = flashcards[index].answer;
  flashcard.classList.remove("flipped");
}

function flipCard() {
  flashcard.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  renderCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  renderCard(currentIndex);
}

// Initialize first card
renderCard(currentIndex);
