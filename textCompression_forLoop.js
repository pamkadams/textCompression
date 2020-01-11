/////OBJECTIVE/////
//Write a series of test compression exercises to see which one is most effective

//create a set manually and put it in an index with a for loop

//import built-in module that reads texts from files
const fs = require("fs");

// Reading data in character set format of  utf-8
fs.readFile("pride_prejudice.txt", "utf-8", (err, data) => {
  if (err) throw err;

  //convert data to an array of words
  let strArr = data.split(" ");
  let arrOfWords = [];

  //function to convert array to text compression represented by an integer
  for (let i = 0; i < strArr.length; i++) {
    if (arrOfWords.includes(strArr[i])) {
      strArr[i] = arrOfWords.indexOf(strArr[i]);
    } else {
      arrOfWords.push(strArr[i]);
      strArr[i] = arrOfWords.length - 1;
    }
  }

  //function to convert array to text compression represented by an integer

  //turn compressed array back into text and verify that it is the same file
  const decompression = (idxArr, compressedArr) => {
    for (let i = 0; i < compressedArr.length; i++) {
      compressedArr[i] = idxArr[compressedArr[i]];
    }
    return compressedArr.join(" ");
  };
  reassembledArr = decompression(arrOfWords, strArr);

  //if the same text then write to a file
  if (JSON.stringify(reassembledArr) === JSON.stringify(data)) {
    console.log("successful test");
    fs.writeFile(
      "./files/pride_prejudice_forLoop",
      arrOfWords,
      strArr,
      function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      }
    );
  } else console.log("failed test)");
});
