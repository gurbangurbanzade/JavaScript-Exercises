let sual = {
  sualMetni: "Hansı proqramlasdirma dilidir",
  cavabVariantlari: {
    a: "HTML",
    b: "JavaScript",
    c: "CSS",
  },
  dogruCavab: "b",
  cavabiYoxla: function (cavab) {
    return cavab === this.dogruCavab;
  },
};

console.log(sual.cavabiYoxla("b"));
