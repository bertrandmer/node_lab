const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname,"../chirps.json");

let chirps = [
    {author: "John", body: "Let's play soccer!"}
    {author: "James", body:"But we don't have enough players"}
    {author: "John", body:"I'll talk to Steve if he wants to play"}
    {author: "Steve", body: "I want to play"}
    {author: "John", body: "Perfect! Meet us at noon"}
    {author: "Steve", body: "I'll ask Adam if he wants to join us"}
];
fs.readFile(
    dataPath,
    {
      encoding: "UTF-8"
    },
    () => {
      chirps.forEach(post => {
        console.log(`${post.body} \n -${post.author} \n`);
      });
    }
  );

