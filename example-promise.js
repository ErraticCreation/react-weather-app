// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
// getTempCallback("Salt Lake City", function(err, temp) {
//   if(err){
//     console.log('Error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject("City Not Found");
//     }, 1000);
//   });
// }
//
// getTempPromise("Salt Lake City").then(function(temp){
//   console.log("promise success", temp);
// }, function(err) {
//   console.log("error", err);
// })

// Challenge Area

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if(typeof a === "number" && typeof b === "number") {
            resolve(a + b);
          } else {
            reject("One or more given values were not a number");
          }
        }, 1000);
  });
}

addPromise(2, 43).then(function(sum) {
  console.log("Promise Successful:", sum);
}, function(err) {
  console.log("Promise Failed:", err);
});
