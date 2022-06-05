//function constructor
function UserES5(ad, ixtisas, dogumTarixi) {
  (this.ad = ad), (this.ixtisas = ixtisas), (this.dogumTarixi = dogumTarixi);
}

let qurban = new UserES5("qurban", "Dev", 1993);
let kenan = new UserES5("kenan", "Dev", 2021);

console.log(qurban);

//class

class UserES6 {
  constructor(ad, ixtisas, dogumTarixi) {
    (this.ad = ad), (this.ixtisas = ixtisas), (this.dogumTarixi = dogumTarixi);
  }
  yasHesabla() {
    return 2022 - this.dogumTarixi;
  }
}

let user1 = new UserES6("kenan", "dev", 2021);
let user2 = new UserES6("pamir", "dev", 2024);
console.log(user1, user2);
console.log(user1.yasHesabla());
