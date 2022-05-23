let ededler = [1, 5, 7, 3, 2, 67];
const mehsullar = [
  {
    mehsulAdi: "iphone10",
    qiymet: 1000,
  },
  {
    mehsulAdi: "iphone11",
    qiymet: 2000,
  },
  {
    mehsulAdi: "iphone12",
    qiymet: 3000,
  },
  {
    mehsulAdi: "iphone13",
    qiymet: 4000,
  },
];
// for (let eded of ededler) {
//   //   console.log(eded);
//   if (eded % 2 == 0) {
//     console.log("cut eded " + eded);
//   }
// }
// const tekEdedYoxla = (eded) => eded % 2 == 1;
// let tekEdedler = ededler.filter((eded) => eded % 2 == 1);
// let tekEdedler = ededler.map((eded) => eded % 2 == 1);
// const result = mehsullar.map((mehsul) => mehsul);
// const result = mehsullar.map((mehsul) => mehsul.qiymet);
// const result = mehsullar.map((mehsul) => mehsul.qiymet > 2000);
// const result = mehsullar.filter((mehsul) => mehsul.qiymet > 2000);
const result = mehsullar
  .filter((mehsul) => mehsul.qiymet > 2000)
  .map((mehsul) => mehsul.mehsulAdi);

console.log(result);
