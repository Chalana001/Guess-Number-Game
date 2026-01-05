function guessAction(){
    let inputid = document.getElementById("txt-id");
    let resultshow = document.getElementById("result");
    let randomno = Math.floor(Math.random() * 11);
    let guessno = inputid.value;

    console.log(`Genrated Number - ${randomno}`);
    
    if ( guessno<10 && guessno>=0 ) {
        if (guessno==randomno) {
            resultshow.textContent = `Nice! You guessed the number ${guessno} correct!🎉`;
        } else {
            resultshow.textContent = `Nope — you guessed number ${guessno} wrong... Try again!`;
        }
        
    } else {
        resultshow.textContent = 'Please enter a whole number between 0 and 10.';
    }
}
