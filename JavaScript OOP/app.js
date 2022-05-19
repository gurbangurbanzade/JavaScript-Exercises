const quiz = new Quiz(suallar);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-box").classList.add("active");
  sualGoster(quiz.sualVer());
  sualSayiniGoster(quiz.sualIndex + 1, quiz.suallar.length);
  document.querySelector(".next-btn").classList.remove("show");
});
document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.sualIndex + 1 !== quiz.suallar.length) {
    quiz.sualIndex += 1;
    sualGoster(quiz.sualVer());
    sualSayiniGoster(quiz.sualIndex + 1, quiz.suallar.length);
    document.querySelector(".next-btn").classList.remove("show");
  } else {
    console.log("sual bitdi");
    document.querySelector(".score-box").classList.add("active");
    document.querySelector(".quiz-box").classList.remove("active");
    neticeniGoster(quiz.suallar.length, quiz.dogruSualSayi);
  }
});
document.querySelector(".btn-quit").addEventListener("click", function () {
  window.location.reload();
});
document.querySelector(".btn-replay").addEventListener("click", function () {
  quiz.sualIndex = 0;
  quiz.dogruSualSayi = 0;
  document.querySelector(".btn-start").click();
  document.querySelector(".score-box").classList.remove("active");
});

const option_list = document.querySelector(".option-list");
const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;
function sualGoster(sual) {
  let question = `<span>${sual.sualMetni}</span>`;
  let options = "";
  for (let cavab in sual.cavabVariantlari) {
    options += `
  <div class="option">
    <span><b>${cavab}</b>: ${sual.cavabVariantlari[cavab]}</span>
  </div>`;
  }

  //const option_list = document.querySelector(".option-list");
  document.querySelector(".question-text").innerHTML = question;
  option_list.innerHTML = options;

  const option = option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cavab = option.querySelector("span b").textContent;
  let sual = quiz.sualVer();
  console.log(option);
  if (sual.cavbiYoxla(cavab)) {
    quiz.dogruSualSayi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }
  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }
  document.querySelector(".next-btn").classList.add("show");
}

function sualSayiniGoster(sualSirasi, cemSual) {
  let tag = `   <span class="badge bg-warning">${sualSirasi} / ${cemSual}</span>`;
  document.querySelector(".quiz-box .question-index").innerHTML = tag;
}

function neticeniGoster(cemSual, dogruCavab) {
  let tag = ` Yekun olaraq ${cemSual} sualdan ${dogruCavab} suala doğru cavab verdiniz`;
  document.querySelector(".score-box .score-text").innerHTML = tag;
}
