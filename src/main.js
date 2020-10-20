// query selector variables go here 👇
var mainPoster = document.querySelector('.main-poster');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterImg = document.querySelector('.poster-img');
var posterForm = document.querySelector('.poster-form');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');
var imageInput = document.querySelector('#poster-image-url');
var savedPosters = document.querySelector('.saved-posters');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var poster = document.querySelector('.poster');
var showRandomButton = document.querySelector('.show-random');
var showFormButton = document.querySelector('.show-form');
var showSavedButton = document.querySelector('.show-saved');
var backToMainButton = document.querySelector('.back-to-main');
var makePosterButton = document.querySelector('.make-poster');
var savePosterButton = document.querySelector('.save-poster');
var showMainButton = document.querySelector('.show-main');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var mySavedPosters = [];
var currentPoster;

// event listeners go here 👇

showRandomButton.addEventListener('click', reloadPoster);
showFormButton.addEventListener('click', openForm);
showMainButton.addEventListener('click', backToHome);
showSavedButton.addEventListener('click', openSavedPosters);
backToMainButton.addEventListener('click', backToHome);
makePosterButton.addEventListener('click', function(event) {
  event.preventDefault();
  createMyPoster();
});
savePosterButton.addEventListener('click', saveCurrentPoster);
savedPostersGrid.addEventListener('dblclick', deletePoster);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = reloadPoster;

function reloadPoster() {
  titlesIndex = getRandomIndex(titles);
  quotesIndex = getRandomIndex(quotes);
  imagesIndex = getRandomIndex(images);
  currentPoster = new Poster(images[imagesIndex], titles[titlesIndex], quotes[quotesIndex]);
  showMyPoster();
}

function openForm() {
  mainPoster.classList.add('hidden');
  posterForm.classList.remove('hidden');
}

function backToHome() {
  mainPoster.classList.remove('hidden');
  posterForm.classList.add('hidden');
}

function openSavedPosters() {
  savedPostersGrid.innerHTML = '';
  
  for (var i = 0; i < mySavedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
        <section id=${mySavedPosters[i].id} class="mini-poster">
            <img class="poster-img" src=${mySavedPosters[i].imageURL}>
            <h2 class="poster-title">${mySavedPosters[i].title}</h2>
            <h4 class="poster-quote">${mySavedPosters[i].quote}</h4>
        </section>`;
  }

  mainPoster.classList.add('hidden');
  savedPosters.classList.remove('hidden');
}

function createMyPoster() {
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  
  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);

  showMyPoster();
  backToHome();
}

function showMyPoster() {
  poster.innerHTML = `
      <img class="poster-img" src=${currentPoster.imageURL}>
      <h1 class="poster-title">${currentPoster.title}</h1>
      <h3 class="poster-quote">${currentPoster.quote}</h3>`;
}

function saveCurrentPoster() {
  if (!mySavedPosters.includes(currentPoster)) {
    mySavedPosters.push(currentPoster);
  }
}

function deletePoster(event) {
  for (var i = 0; i < mySavedPosters.length; i++) {
    var idCheck = mySavedPosters[i].id.toString();
    
    if (event.target.closest('section').id === idCheck) {
      mySavedPosters.splice(i, 1);
    }
  }
  openSavedPosters();
}