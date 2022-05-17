function Sual(sualMetni, cavabVariantlari, dogruCavab) {
  this.sualMetni = sualMetni;
  this.cavabVariantlari = cavabVariantlari;
  this.dogruCavab = dogruCavab;

  console.log(this);
}
Sual.prototype.cavbiYoxla = function (cavab) {
  return cavab === this.dogruCavab;
};

let suallar = [
  new Sual(
    "Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
  new Sual(
    "Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS" },
    "b"
  ),
];

console.log(suallar[0].cavbiYoxla("b"));
