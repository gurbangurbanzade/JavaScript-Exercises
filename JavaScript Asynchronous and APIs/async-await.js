console.log("start");
const login = (username, parol) => {
  return new Promise((resolve, reject) => {
    if (username == "qurban") {
      setTimeout(() => {
        {
          resolve({ username: username, parol: parol });
        }
      }, 2000);
    } else {
      reject("ad duz deyil");
    }
  });
};
const getPostsByUserName = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 2000);
  });
};
async function displayUser() {
  try {
    const user = await login("qurban", "aasa");
    console.log(user);
    const posts = await getPostsByUserName(user);
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
}
displayUser();

// login("qurban", "123", (user) => {
//   console.log(user.username);
//   console.log(user.parol);
//   getPostsByUserName((posts) => {
//     console.log(posts);
//   });
// });

// login("qurban", "123")
//   .then((user) => {
//     console.log(user);
//     return getPostsByUserName(user.username);
//   })
//   .then((post) => {
//     console.log(post);
//   });

console.log("end");
