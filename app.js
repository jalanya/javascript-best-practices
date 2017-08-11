function asyncMethod(message) {
  return new Promise(function(fulfill, reject) {
    setTimeout(function() {
      console.log(message);
      fulfill();
    }, 500)
  });
}

asyncMethod('Open DB Connection')
  .then(function() {
  asyncMethod('Find User')
    .then(function() {
    asyncMethod('validate User')
      .then(function(){
      asyncMethod('do stuff')
        .then(function() {})
    })
  })
})
