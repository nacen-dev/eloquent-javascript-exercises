// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// Expected Output
// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

// My solution
for (let i = 0; i < 7; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "#"
  }
  console.log(str)
  str = ""
}

// Eloquent Javascript's solution
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

