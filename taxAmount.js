function taxAmount (amount,taxPercent){
    if (typeof(amount)== "number" && typeof(taxPercent)=="number"){
        amount*= 100;
        output = amount*(taxPercent/100);
        output = [output];
        console.log(output+ " kobo");
}
else{
    console.log("The two values has to be integers")
}
}
taxAmount(250, 15);