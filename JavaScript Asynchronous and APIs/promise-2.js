console.log("start");
const login = (username, parol) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      {
        resolve({ username: username, parol: parol });
      }
    }, 2000);
  });
};
const getPostsByUserName = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 2000);
  });
};

// login("qurban", "123", (user) => {
//   console.log(user.username);
//   console.log(user.parol);
//   getPostsByUserName((posts) => {
//     console.log(posts);
//   });
// });

login("qurban", "123")
  .then((user) => {
    console.log(user);
    return getPostsByUserName(user.username);
  })
  .then((post) => {
    console.log(post);
  });

console.log("end");
