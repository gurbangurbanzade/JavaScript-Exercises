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
    { a: "HTML", b: "JavaScript", c: "CSS", d: "SASS" },
    "b"
  ),
  new Sual(
    "2-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS", d: "SASS" },
    "b"
  ),
  new Sual(
    "3-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS", d: "SASS" },
    "b"
  ),
  new Sual(
    "4-Hansı proqramlasdirma dilidir",
    { a: "HTML", b: "JavaScript", c: "CSS", d: "SASS" },
    "b"
  ),
];
