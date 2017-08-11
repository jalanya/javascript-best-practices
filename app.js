function asyncMethod(message) {
  return new Promise(function(fulfill, reject) {
    setTimeout(function() {
      console.log(message);
      fulfill();
    }, 500)
  });
}

function doStuff() {
  return asyncMethod('do stuff');
}

function validateUser() {
  return asyncMethod('validate User');
}

function findUser() {
  return asyncMethod('Find User');
}

asyncMethod('Open DB Connection')
  .then(findUser)
  .then(validateUser)
  .then(doStuff)
  .then(function() {});
