function Sual(sualMetni, cavabVariantlari, dogruCavab) {
  this.sualMetni = sualMetni;
  this.cavabVariantlari = cavabVariantlari;
  this.dogruCavab = dogruCavab;
}
Sual.prototype.cavbiYoxla = function (cavab) {
  return cavab === this.dogruCavab;
};

let suallar = [
  new Sual(
    "1-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "2-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "3-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "4-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
];

function Quiz(suallar) {
  this.suallar = suallar;
  this.sualIndex = 0;
}
Quiz.prototype.sualVer = function () {
  return this.suallar[this.sualIndex];
};
const quiz = new Quiz(suallar);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-box").classList.add("active");
  sualGoster(quiz.sualVer());
});
document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.sualIndex + 1 !== quiz.suallar.length) {
    quiz.sualIndex += 1;
    sualGoster(quiz.sualVer());
  } else {
    console.log("sual bitdi");
  }
});
function sualGoster(sual) {
  let question = `<span>${sual.sualMetni}</span>`;
  let options = "";
  for (let cavab in sual.cavabVariantlari) {
    options += `
  <div class="option">
    <span><b>${cavab}</b>: ${sual.cavabVariantlari[cavab]}</span>
  </div>`;
  }
  document.querySelector(".question-text").innerHTML = question;
  document.querySelector(".option-list").innerHTML = options;
}
