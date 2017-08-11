function asyncMethod(message, cb) {
  setTimeout(function() {
    console.log(message);
    cb();
  }, 500)
}

asyncMethod('Open DB Connection', function() {
  asyncMethod('Find User', function() {
    asyncMethod('validate User', function(){
      asyncMethod('do stuff', function() {})
    })
  })
})
