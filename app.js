function asyncMethod(message) {
  return new Promise(function(fulfill, reject) {
    setTimeout(function() {
      console.log(message);
      fulfill();
    }, 500)
  });
}

function doStuff() {
  asyncMethod('do stuff')
    .then(function() {});
}

function validateUser() {
  asyncMethod('validate User')
    .then(doStuff);
}

function findUser() {
  asyncMethod('Find User')
    .then(validateUser);
}

asyncMethod('Open DB Connection')
  .then(findUser);
