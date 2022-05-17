function Sual(sualMetni, cavabVariantlari, dogruCavab) {
  this.sualMetni = sualMetni;
  this.cavabVariantlari = cavabVariantlari;
  this.dogruCavab = dogruCavab;
  this.cavbiYoxla = function (cavab) {
    return cavab === this.dogruCavab;
  };
}

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

for (let s of suallar) {
  console.log(s.sualMetni);
}

console.log(suallar[0].cavbiYoxla("b"));
