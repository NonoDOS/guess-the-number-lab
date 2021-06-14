<script defer src="./app.js"></script>

const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    numGuesses: 0,
    secretNum: null,
    prevGuesses:[],

    play: function() {
        alert ("Guess A number!!!")

        alert("Please type in the range of numbers you like to see your secret number in....")

        //setting a range (smallest no and biggest no.) from user input
        const inputNum = document.querySelector("numbers");
        inputNum.setAttribute('min')
        inputNum.setAttribute("max")

        this.setSmallestNum ()
        this.setBiggestNum ()
        
     //generating a secret num with random function
     //(1)Random Function
        let y = getRandom
         getRandom = function(){
          this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
     }
     
     //(2)for the correct guesses by players 
     //(2)getGuess
       x : document.getElementById("getGuess").nodeValue,
       getGuess =function(){},
       getGuess = 1,
       document.getElementByID("submitguess".onclick = function(){
    
        //(2)the number guessed by the player

     })
    }
 }

 if (x==y)
  {
      alert("Congratuation!!! You GUESSED it RIGHT!!!" + getGuess + "at this guess")
  }else if(x>y){
      guess ++
      alert("Sorry!!! Try a smaller Number")
  }else{
      guess++
      alert("Sorry!! Try a bigger Number")

  }