function palindrom(num) {
  var reverse = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  if(num === reverse){
    return true;
  }
  else{
    return false;
  }
}

function product() {
  var ans;
  var max = 0;
  for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
      ans = i * j;
      if (palindrom(ans)) {
        if(max < ans){
          max = ans;
          console.log("palindrom product is ", i +'*' +j +'='+ ans);
        }
      }
    }
  }
}

product();
