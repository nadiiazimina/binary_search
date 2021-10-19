function BinarySearch(list, item) {
  //[2,6,7,90,103], 90
  var min = 0;
  var max = list.length - 1; //5
  var guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2); //start in the middle

    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
}

BinarySearch([2, 6, 7, 90, 103], 90);
