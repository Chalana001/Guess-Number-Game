function guessAction(){
    let inputid = document.getElementById("txt-id");
    let resultshow = document.getElementById("result");
    let randomno = Math.floor(Math.random() * 11);
    let guessno = inputid.value;

    if ( guessno<10 && guessno>=0 ) {
        if (guessno==randomno) {
            resultshow.textContent = `Nice! You guessed number ${guessno} correct!🎉`;
        } else {
            resultshow.textContent = `Nope — you guessed number ${guessno} wrong... Try again!`;
        }
        
    } else {
        resultshow.textContent = 'Please enter a whole number between 0 and 10.';
    }


    //      inputEl = document.getElementById("txt-id");
    //     const resultEl = document.getElementById("result");
    //     const raw = inputEl.value.trim();
    //     const guess = Number(raw);

    //     if (!raw || Number.isNaN(guess) || guess < 0 || guess > 10){
    //         resultEl.textContent = 'Please enter a whole number between 0 and 10.';
    //         resultEl.style.color = '#fca5a5';
    //         return;
    //     }

    //     const randomNo = Math.floor(Math.random() * 11);

    //     if (guess === randomNo){
    //         resultEl.textContent = `Nice! You guessed ${guess} and it matched ${randomNo} 🎉`;
    //         resultEl.style.color = '#7af7c9';
    //     } else {
    //         resultEl.textContent = `Nope — you guessed ${guess}, random was ${randomNo}. Try again!`;
    //         resultEl.style.color = '#ffd166';
    //     }
    // }

    // // expose to global so inline `onclick="guessAction()"` works from HTML
    // try{ window.guessAction = guessAction; }catch(e){ /* ignore in restrictive environments */ }

    // document.addEventListener('DOMContentLoaded', function()const{
    //     const btn = document.getElementById('guess-button');
    //     if (btn) btn.addEventListener('click', guessAction);
    // });

}