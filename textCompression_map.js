/////OBJECTIVE/////
//Write a couple of test compression exercises to see which one is most effective

//create a set then use it to create the compressed text file by replacing the word with the set index number.

//import built-in module that reads texts from files
const fs = require("fs");

// Reading data in character set format of  utf-8
fs.readFile("pride_prejudice.txt", "utf-8", (err, data) => {
  if (err) throw err;

  //create a set of all unique words in textfile
  const dataSet = new Set(data.split(" "));
  let arrOfWords = Array.from(dataSet);

  //function to convert data to an array and then compress the data from text to integer representing the word
  const compressedArr = data.split(" ").map(word => {
    return arrOfWords.indexOf(word);
  });

  //turn compressed array back into text and verify that it is the same file
  const decompression = compressedArr
    .map(word => {
      return arrOfWords[word];
    })
    .join(" ");

  //if the same text then write to a file
  if (JSON.stringify(decompression) === JSON.stringify(data)) {
    console.log("successful test");
    fs.writeFile(
      "./files/pride_prejudice_map",
      arrOfWords,
      compressedArr,
      function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      }
    );
  } else console.log("failed test");
});
