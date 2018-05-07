function isDivisible(numa, num) {
  if (numa % num == 0) {
    return true;
  } else {
    return false;
  }
};

function divisibleBy3(num) {
  if (isDivisible(num, 3)) {
    return true;
  } else {
    return false;
  }
};

function divisibleBy5(num) {
  if (isDivisible(num, 5)) {
return true;
  } else {
    return false;
  }
}
function neither3Nor5(num){
if (divisibleBy3 != 0 && divisibleBy5 !=0){
  return true;
}

}
for (var numa=1;numa<=100; numa++) {
    if (divisibleBy3(numa) && divisibleBy5(numa)){
     console.log("fizzBuzz")
    }
  if (divisibleBy3(numa)) {
    console.log("Fizz")
}
  if (divisibleBy5(numa)) {
      console.log("Buzz");
    } 
    if (neither3Nor5(numa)) {
      console.log(numa);
 }
}
