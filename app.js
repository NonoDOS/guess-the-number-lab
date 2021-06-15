const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    

    play: function(){
         alert("Guess A number!!!")
        
        //  let smallestNum = parseInt(prompt("Enter the smaller number "));
        //  let biggestNum = parseInt(prompt("Enter the bigger number "));

        //  while(isNaN(userInputmin))
        //    smallestNum = parseInt(prompt('Enter the smaller number.'));
        //  while(isNaN(userInputmax))
        //     biggestNum= parseInt(prompt('Enter the biggest number.'));
    
     //generating a secret num with random function
     //(1)Random Function
          
          this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

          let guess = NaN;
          while( guess != this.secretNum ){ 
              guess = this.getGuess()
              this.render(guess)

          }
     },
     
     //for the correct guesses by players 
     //(2)getGuess
       
    getGuess : function(){
        let guess = NaN
        while(
            isNaN(guess) ||
            guess < this.smallestNum ||
            guess > this.biggestNum
            ){
            guess = parseInt(prompt(`${this.secretNum}Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`))
        } 
        return guess;
     },
       
    render: function(guess){
      if (guess == this.secretNum)
     {
      alert(`Congratuation!!! You GUESSED it RIGHT in ${this.prevGuesses.length} guesses!!`)
     }else if(guess> this.secretNum){
      this.prevGuesses.push(guess)
      alert(`Sorry!!! Try a smaller Number!! ,these are your guesses: ${this.prevGuesses}`)
     }else{
      this.prevGuesses.push(guess)
      alert(`Sorry!! Try a bigger Number!! , these are your guesses: ${this.prevGuesses}`)
     }
     },
} 
game.play()