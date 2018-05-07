//word guesser
//when someone guesses a word from a list of words,it checks
//the array to see if the word exists. if yes, return Yay! you
//guessed right. if no, Oops,guessed wrongly.

function wordGuesser(name){
    //list of words to be guessed correctly
    var names=['chinonso','chidera','ibe','uche','valentine'];
    var status;
    for(index=0;index<=names.length-1;index++){
if (name == names[index]){
    status = 'Yay,you guessed right.';
    breaks;
}else{
    status = 'Oops, guessed wrongly.';
}
    }
    console.log(status);
}
//lets guess a word
wordGuesser('nonso');
// --> Ooops, guessed wrongly.
