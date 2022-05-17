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
  if (quiz.sualIndex !== quiz.suallar.length) {
    console.log(quiz.sualVer());
    quiz.sualIndex++;
  } else {
    console.log("sual bitdi");
  }
});
