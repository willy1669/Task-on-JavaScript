//A FizzBuzz Program that outputs fizz for numbers divisible by 3 and outputs buzz for numbers divisible by 5
//for numbers divisible by 3 and 5 it outputs FizzBuzz.


function fizzBuzz(){
    for (var num=1; num<=100; num++){
    var divisibleBy3 = num%3;
    var divisibleBy5 = num%5;
    if (divisibleBy3 == 0 && divisibleBy5 == 0){
        console.log("fizzBuzz");
    }
    else if (divisibleBy3 == 0){
        console.log("fizz");
    }
    else if (divisibleBy5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(num);
    }
    }
}
fizzBuzz();