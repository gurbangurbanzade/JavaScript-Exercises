console.log("start");
const login = (username, parol, callBack) => {
  setTimeout(() => {
    {
      callBack({ username: username, parol: parol });
    }
  }, 2000);
};
const getPostsByUserName = (callback) => {
  setTimeout(() => {
    callback(["post1", "post2"]);
  }, 2000);
};
login("qurban", "123", (user) => {
  console.log(user.username);
  console.log(user.parol);
  getPostsByUserName((posts) => {
    console.log(posts);
  });
});

console.log("end");
