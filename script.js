let currentQuestions=[], currentIndex=0, score=0, currentCategory="";
let currentLang = "en";

const optionsDiv=document.getElementById("options");
const questionText=document.getElementById("question-text");
const scoreEl=document.getElementById("score");

const music=document.getElementById("bg-music");
const musicBtn=document.getElementById("music-toggle");

let isPlaying=false;

/* 🎵 START MUSIC ON FIRST TOUCH */
document.body.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.3;
    music.play().catch(()=>{}); // handle autoplay block
    isPlaying = true;
  }
}, { once: true });

/* 🎵 TOGGLE MUSIC */
musicBtn.onclick=()=>{
  if(isPlaying){
    music.pause();
    musicBtn.innerText="🔊";
  }else{
    music.play();
    musicBtn.innerText="🔇";
  }
  isPlaying=!isPlaying;
};

/* 📲 INSTALL */
let deferredPrompt;
const installBtn=document.getElementById("install-btn");
installBtn.style.display="block"; // always visible

window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  deferredPrompt=e;
});

installBtn.onclick=async()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    deferredPrompt = null;
  } else {
    alert("Your browser does not support install prompt or already installed.");
  }
};

/* 🎮 CATEGORY SELECT */
document.querySelectorAll(".category-btn").forEach(btn=>{
  btn.onclick=()=>{
    currentCategory=btn.dataset.category;
    currentQuestions=questions[currentCategory];

    document.getElementById("hero").style.display="none";
    document.getElementById("quiz-container").style.display="flex";

    currentIndex=0;
    score=0;
    scoreEl.innerText=score;

    showQuestion();
  };
});

/* ⚡ LANGUAGE SWITCH */
function setLanguage(lang){
  currentLang = lang;
  if(currentQuestions.length) showQuestion();
}

/* ❓ SHOW QUESTION */
function showQuestion(){
  optionsDiv.classList.remove("answered");
  let q=currentQuestions[currentIndex];
  questionText.innerText = (currentLang==="en") ? q.question_en : q.question_np;
  optionsDiv.innerHTML="";

  document.getElementById("quiz-container").className=currentCategory+"-bg";

  let options = (currentLang==="en") ? q.options_en : q.options_np;

  options.forEach(opt=>{
    let btn=document.createElement("button");
    btn.innerText=opt;
    btn.className="option-btn";

    btn.onclick=()=>{
      if(optionsDiv.classList.contains("answered")) return;
      optionsDiv.classList.add("answered");

      let answer = (currentLang==="en") ? q.answer_en : q.answer_np;

      if(opt===answer){
        score++;
        btn.classList.add("correct");
        new Audio("https://www.soundjay.com/buttons/sounds/button-4.mp3").play();
        confetti({particleCount: 50, spread: 70, origin: {y: 0.6}});
      }else{
        btn.classList.add("wrong");
        new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3").play();
      }
      scoreEl.innerText=score;
    };

    optionsDiv.appendChild(btn);
  });

  document.getElementById("progress-bar").style.width=
    ((currentIndex+1)/currentQuestions.length)*100+"%";
}

/* ➡️ NEXT */
document.getElementById("next-btn").onclick=()=>{
  if(currentIndex<currentQuestions.length-1){
    currentIndex++;
    showQuestion();
  }else{
    showCompletion();
  }
};

/* 🏠 HOME */
document.getElementById("home-btn").onclick=()=>{
  location.reload();
};

/* 🎉 COMPLETION */
function showCompletion(){
  document.getElementById("quiz-container").style.display="none";
  document.getElementById("completion-screen").style.display="flex";

  document.getElementById("final-score").innerText=
    score+" / "+currentQuestions.length;

  confetti({particleCount: 150, spread: 90, origin: {y: 0.5}});
  new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3").play();
}

/* ⚡ SERVICE WORKER */
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js");
}
