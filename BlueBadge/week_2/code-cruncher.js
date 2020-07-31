function createCheckDigit(membershipId) {
    let arr = membershipId.split("");
    console.log(arr); //check this first!
    let total = 0; //you have to create a total to add all the numbers up
    for(let i=0; i<arr.length; i++) { //you want it to stop at the end of the arr length, not membershipId length
        total = total + parseInt(arr[i]); //the parseInt converts string to a number
    }
    return total;
    }
    
    console.log(createCheckDigit("526959"));
    console.log(createCheckDigit("4812863"));