function Quiz(suallar) {
  this.suallar = suallar;
  this.sualIndex = 0;
}
Quiz.prototype.sualVer = function () {
  return this.suallar[this.sualIndex];
};
