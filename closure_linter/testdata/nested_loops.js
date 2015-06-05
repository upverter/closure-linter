// Reuse of i
for (var i = 0; i < 10; i++) {
  for (var i = 3; i < 5; i++) {
  }
}


// Reuse of j
for (var j = 10; j < 50; j++) {
  for (var q = 0; q < 20; q++) {
    for (var j = 7; j < 10; j++) {

    }
  }
}

// Reuse of r
for (var q = 10; q < 50; q++) {
  for (var r = 0; r < 20; r++) {
    for (var r = 7; r < 10; r++) {

    }
  }
}

// reuse of key
var amap = {};
for (var key in map) {
  for (var key = 0; key < 10; key++) {

  }
}

// No reuse, different variable names
var bmap = {};
for (var key in bmap) {
  for (var i = 0; i < 10; i++) {

  }
}

// No reuse error because loop is contained in a closure's scope
for (var q = 10; q < 50; q++) {
  for (var r = 0; r < 20; r++) {
    var foo = function() {
      for (var r = 7; r < 10; r++) {

      }
    };
  }
}
