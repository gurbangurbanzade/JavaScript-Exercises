function Quiz(suallar) {
  this.suallar = suallar;
  this.sualIndex = 0;
  this.dogruSualSayi = 0;
}
Quiz.prototype.sualVer = function () {
  return this.suallar[this.sualIndex];
};
