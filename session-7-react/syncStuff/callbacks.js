const comments = [
  { author: "Ion", comment: "Dentist" },
  { author: "Mihail", comment: "Aoleu" },
];

// console.log("1");
// console.log("2");

// setTimeout(() => console.log("3"), 3000);

// console.log("4");
// console.log("5");

function getComments() {
  setTimeout(
    () => comments.forEach((com) => console.log(com.author, com.comment)),
    1000
  );
}

function addComments(comment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      comments.push(comment);
      const err = false;
      if (!err) {
        resolve();
        console.log("RESOLVE")
      } else {
        reject("ERRROARE!");
      }
    }, 3000);
  });
}

// console.log(
//   addComments({ author: "Mihaela", comment: "Hai la training" })
//     .then(getComments)
//     .catch((err) => console.log("Error", err))
// );

// function addComments(comment, callback) {
//   setTimeout(() => {
//     comments.push(comment);
//     callback();
//   }, 2000);
// }

// addComments({ author: "Mihaela", comment: "Hai la training" }, getComments);

async function init() {
    await addComments({ author: "Mihaela", comment: "Hai la training" });
    getComments();
}

console.log(init())
