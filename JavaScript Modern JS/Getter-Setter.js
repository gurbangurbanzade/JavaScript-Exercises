class User {
  constructor(ad, ixtisas, dogumTarixi) {
    (this.ad = ad), (this.ixtisas = ixtisas), (this.dogumTarixi = dogumTarixi);
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

let user1 = new User("kenan", "dev", 2033);
console.log(user1);
console.log(user1.ad);
console.log(user1.dogumTarixi);
