const args = process.argv.slice(2);
// efine an array to pick the numbers from all input
let times = [];

args.forEach((item) => {
  if (item * 1) {
    // to check if the item is a Number or not, if so, push it the times Array
    times.push(item);
  }
});
times = times.sort((a, b) => a - b); // sort the array

times.forEach((element) => {
  setTimeout(() => {
    console.log(`Its for ${element} seconds!`);
    require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff");
  }, element * 1000);
});
