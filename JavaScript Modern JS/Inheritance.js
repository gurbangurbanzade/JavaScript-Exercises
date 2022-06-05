class User {
  constructor(ad, dogumTarixi) {
    console.log("user constructor"),
      (this.ad = ad),
      (this.dogumTarixi = dogumTarixi);
  }
  yasHesabla() {
    return 2022 - this.dogumTarixi;
  }

  get ad() {
    return this._ad;
  }

  set ad(value) {
    if (value.length < 3) {
      console.log("ad herflerinin sayi azdir");
      return;
    }
    this._ad = value;
  }

  get dogumTarixi() {
    return this._dogumTarixi;
  }

  set dogumTarixi(value) {
    if (2022 - value < 0) {
      console.log("yasi duzgun daxil edin");
      return;
    }
    this._dogumTarixi = value;
  }
}

class Student extends User {
  constructor(ad, dogumTarixi, mekteb) {
    console.log("student constructor");
    super(ad, dogumTarixi), (this.mekteb = mekteb);
  }
  dersOxu() {
    return `${this.ad} ders oxuyur`;
  }
}

let user = new User("kenan", 2021);
let student = new Student("qurban", 1993, 123);

console.log(user.yasHesabla());
console.log(student.yasHesabla());
console.log(student.dersOxu());
