// NUMBER GUESSING GAME

const minValue=1;
const maxValue=100;
const answer= Math.floor(Math.random()*(maxValue-minValue+1))+minValue;

let attempts =0;
let guess;
let running =true;


while(running){

    guess = window.prompt(`Guess a number between ${minValue} and ${maxValue}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");

    }
    else if(guess<minValue || guess>maxValue){
        window.alert("Please enter a valid number");

    }
    else{
        attempts++
        if(guess<answer){
            window.alert("TOO LOW, TRY AGAIN")

        }
        else if(guess>answer){
            window.alert("TOO HIGH, TRY AGAIN")

        }
        else{
            window.alert(`CORRECT !!! The answer is ${answer} . It took you ${attempts} attempts`)
            running= false;
        }


    }
}
