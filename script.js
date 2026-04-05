// ==============================
// 🎵 AUDIO SETUP
// ==============================
let isPlaying = false;

// Background music
const bgMusic = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;

// Other sounds
const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-4.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");
const levelUpSound = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

// ==============================
// 🎶 MUSIC TOGGLE
// ==============================
const musicBtn = document.getElementById("music-toggle");

musicBtn.onclick = () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.innerHTML = `<span class="music-text">OFF</span> 🔇`;
  } else {
    bgMusic.play().catch(() => console.log("Music blocked"));
    musicBtn.innerHTML = `<span class="music-text">ON</span> 🔊`;
  }
  isPlaying = !isPlaying;
};

// Start music on first click anywhere
document.body.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play().catch(() => console.log("Music blocked"));
    musicBtn.innerHTML = `<span class="music-text">ON</span> 🔊`;
    isPlaying = true;
  }
}, { once: true });

// ==============================
// 📲 INSTALL BUTTON
// ==============================
let deferredPrompt;
const installBtn = document.getElementById("install-btn");

installBtn.style.display = "none";

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "flex";
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  } else {
    alert("To install on iOS:\n1. Tap 'Share'\n2. Select 'Add to Home Screen'");
  }
});

// ==============================
// 🎮 QUIZ VARIABLES
// ==============================
let currentQuestions = [], currentIndex = 0, score = 0, currentCategory = "";
const optionsDiv = document.getElementById("options");
const questionText = document.getElementById("question-text");
const scoreEl = document.getElementById("score");

// ==============================
// 🎮 CATEGORY SELECT
// ==============================
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.onclick = () => {
    currentCategory = btn.dataset.category;
    currentQuestions = questions[currentCategory];

    document.getElementById("hero").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";

    currentIndex = 0;
    score = 0;
    scoreEl.innerText = score;

    showQuestion();
  };
});

// ==============================
// ❓ SHOW QUESTION
// ==============================
function showQuestion() {
  optionsDiv.classList.remove("answered");

  const q = currentQuestions[currentIndex];
  questionText.innerText = q.question_en;
  optionsDiv.innerHTML = "";

  document.getElementById("quiz-container").className = currentCategory + "-bg";

  q.options_en.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "option-btn";

    btn.onclick = () => {
      if (optionsDiv.classList.contains("answered")) return;
      optionsDiv.classList.add("answered");

      if (opt === q.answer_en) {
        score++;
        btn.classList.add("correct");
        correctSound.currentTime = 0;
        correctSound.play().catch(() => console.log("Correct sound blocked"));
      } else {
        btn.classList.add("wrong");
        wrongSound.currentTime = 0;
        wrongSound.play().catch(() => console.log("Wrong sound blocked"));
      }

      scoreEl.innerText = score;
    };

    optionsDiv.appendChild(btn);
  });

  document.getElementById("progress-bar").style.width =
    ((currentIndex + 1) / currentQuestions.length) * 100 + "%";
}

// ==============================
// ➡️ NEXT BUTTON
// ==============================
document.getElementById("next-btn").onclick = () => {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showCompletion();
  }
};

// ==============================
// ⬅️ BACK BUTTON
// ==============================
document.getElementById("back-btn").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
};

// ==============================
// 🏠 HOME BUTTON
// ==============================
document.getElementById("home-btn").onclick = () => {
  location.reload();
};

// ==============================
// 🎉 COMPLETION
// ==============================
function showCompletion() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("completion-screen").style.display = "flex";

  document.getElementById("final-score").innerText =
    score + " / " + currentQuestions.length;

  confetti();

  levelUpSound.currentTime = 0;
  levelUpSound.play().catch(() => console.log("Level-up sound blocked"));
}

// ==============================
// ⚡ SERVICE WORKER
// ==============================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("SW registration failed", err));
}