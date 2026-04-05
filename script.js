let currentQuestions=[], currentIndex=0, score=0, currentCategory="";
const optionsDiv=document.getElementById("options");
const questionText=document.getElementById("question-text");
const scoreEl=document.getElementById("score");

const music=document.getElementById("bg-music");
const musicBtn=document.getElementById("music-toggle");
const installBtn=document.getElementById("install-btn");

let isPlaying=false;

// Preload sounds
const correctSound=new Audio("https://www.soundjay.com/buttons/sounds/button-4.mp3");
const wrongSound=new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");
const levelUpSound=new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

// Play music on first user click
document.body.addEventListener("click",()=>{
  if(!isPlaying){ music.volume=0.3; music.play().catch(()=>{}); isPlaying=true; }
},{once:true});

// Toggle music
musicBtn.onclick=()=>{
  if(isPlaying){ music.pause(); musicBtn.innerText="🔊"; } 
  else{ music.play().catch(()=>{}); musicBtn.innerText="🔇"; }
  isPlaying=!isPlaying;
};

// Always show install button
let deferredPrompt;
window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
});
installBtn.onclick=async()=>{
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt=null;
};

// Category selection
document.querySelectorAll(".category-btn").forEach(btn=>{
    btn.onclick=()=>{
        currentCategory=btn.dataset.category;
        currentQuestions=questions[currentCategory];
        document.getElementById("hero").style.display="none";
        document.getElementById("quiz-container").style.display="flex";
        currentIndex=0; score=0; scoreEl.innerText=score;
        showQuestion();
    };
});

function showQuestion(){
    optionsDiv.classList.remove("answered");
    let q=currentQuestions[currentIndex];
    questionText.innerText=q.question_en;
    optionsDiv.innerHTML="";
    document.getElementById("quiz-container").className=currentCategory+"-bg";
    q.options_en.forEach(opt=>{
        let btn=document.createElement("button");
        btn.innerText=opt;
        btn.className="option-btn";
        btn.onclick=()=>{
            if(optionsDiv.classList.contains("answered")) return;
            optionsDiv.classList.add("answered");
            if(opt===q.answer_en){
                score++;
                btn.classList.add("correct");
                correctSound.currentTime=0; correctSound.play().catch(()=>{});
            }else{
                btn.classList.add("wrong");
                wrongSound.currentTime=0; wrongSound.play().catch(()=>{});
            }
            scoreEl.innerText=score;
        };
        optionsDiv.appendChild(btn);
    });
    document.getElementById("progress-bar").style.width=((currentIndex+1)/currentQuestions.length)*100+"%";
}

// Controls
document.getElementById("next-btn").onclick=()=>{ if(currentIndex<currentQuestions.length-1){currentIndex++;showQuestion();} else{showCompletion();}};
document.getElementById("back-btn").onclick=()=>{ if(currentIndex>0){currentIndex--;showQuestion();}};
document.getElementById("home-btn").onclick=()=>{ location.reload(); };

// Completion
function showCompletion(){
    document.getElementById("quiz-container").style.display="none";
    document.getElementById("completion-screen").style.display="flex";
    document.getElementById("final-score").innerText=score+" / "+currentQuestions.length;
    confetti();
    levelUpSound.currentTime=0; levelUpSound.play().catch(()=>{});
}

// Service Worker
if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js"); }
