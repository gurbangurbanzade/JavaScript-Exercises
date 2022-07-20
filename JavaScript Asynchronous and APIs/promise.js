console.log("start");
// const serverStatus = true;
// const login = (username, parol, succesFn, errorFn) => {
//   if (serverStatus) {
//     setTimeout(() => {
//       {
//         succesFn({ username: username, parol: parol });
//       }
//     }, 2000);
//   } else {
//     errorFn("server baglidir");
//   }
// };
// const getPostsByUserName = (succesFn) => {
//   setTimeout(() => {
//     succesFn(["post1", "post2"]);
//   }, 2000);
// };

// login(
//   "qurban",
//   "123",
//   (user) => {
//     console.log(user.username);
//     console.log(user.parol);
//     getPostsByUserName((posts) => {
//       console.log(posts);
//     });
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const serverStatus = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (serverStatus) {
      resolve({ userName: "Qurban" });
    } else {
      reject("server qapali");
    }
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
