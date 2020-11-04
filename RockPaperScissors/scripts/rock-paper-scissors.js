  
    let playerScore=0;
    let computerScore=0;
    let numberOfRoundsPlayed=0;

    const scissorsButton= document.getElementById("scissors-button");
    scissorsButton.addEventListener('click',runGame);

    const paperButton=document.getElementById("paper-button");
    paperButton.addEventListener("click",runGame);

    const rockButton=document.getElementById("rock-button");
    rockButton.addEventListener("click",runGame);
   

    function runGame(e)
    {
        
        // handles the game functions

        // Let the computer throw a hand
        console.log("Player Threw:"+e.path[1].id);
        console.log(e);
        let playerHand=findPlayerHand(e.path[1].id);
       
        let computerHand= computerTurn();
        console.log("Computer Threw: "+computerHand);
        
        updateHandsThrownDisplay(playerHand,computerHand);

        // Compare hand thrown;
        
        let findWinner=compareHands(playerHand,computerHand);
        
        changeScore(findWinner);
     
        
    }

    

    function changeScore(findWinner)
    {
       let  winner=" ";
        if(findWinner==1)
        {
            // When the player wins the the round a code 1 is returned
            // Increments the player score when the player wins
    
            winner="The Player Won";
            playerScore++;
            const scoreofPlayer = document.getElementById("player-score");
            scoreofPlayer.innerHTML=("Score: "+playerScore);

        }
        else if(findWinner==-1)
        {
            // When the computer wins the the round a code -1 is returned
            // Increments the player score when the player wins

            winner="The Computer Won";
            computerScore++;
            const scoreofComputer = document.getElementById("computer-score");
            scoreofComputer.innerHTML=("Score: "+playerScore);
        }
        else
        {
            // When noone wins it is implied there is a tie
            winner="It's a Tie";
            
        }

        displayWinner(winner);

    }

    function displayWinner(winner)
    {

        // Displays the winner on the page
        const displayWinner= document.getElementById("winner-display");
        
        displayWinner.innerHTML= winner;
        displayWinner.style.backgroundColor="white";
        displayWinner.style.width="300px";
        displayWinner.style.height="40px";
        displayWinner.style.marginTop="20px";
        displayWinner.style.borderRadius="25px";
        
    
    }
    
    function findPlayerHand(playerHand)
    {
        // Finds the playerhand from the inputs entered
        if(playerHand==="rock")
        {
            console.log("Rock recorded");
            return "rock";
        }
        else if(playerHand==="scissors")
        {
            console.log("Scissors recorded");
            return "scissors";
        }
        else if(playerHand==="paper")
        {
            console.log("Paper recorded");
            return "paper";
        }
        
    }
    
    
    
    function updateHandsThrownDisplay(playerChoice,computerChoice)
    {
        // Displays what hand is 
        const playerHand = document.getElementById("player-hand-chosen");
        const computerHand = document.getElementById("computer-hand-chosen");

        playerHand.src="images/"+playerChoice+".png";
        
        computerHand.src="images/"+computerChoice+".png";
        
        
    }

    function computerTurn()
    {
        // Randomly chooses hand
        // Hand chosen from a random index of the hands array
        let hands = ['rock','paper','scissors'];
        let chosen= hands[getRandomInt(3)];
        console.log(chosen);
        return chosen;

    }

    function getRandomInt(max)  
    {
        // Gets a random number between 0 and max
        return Math.floor(Math.random() * Math.floor(max));
    }

    function compareHands(playerSelection,computerSelection)
    {
        // Checks if the player won or if its a tie
        // If the player does not tie or win then the computer is the winnner
        let score=5;
        if(playerSelection==computerSelection)
        {
            // If hand match then it is a tie
            score=0;           
            console.log('It is a Tie');
           
            
        }
        else if(playerSelection=='rock'&&computerSelection=='scissors')
        {
            // If the player throws a rock and the computer scissors
            // Player wins
            score=1;
             
            console.log('The Player Won');
           
            
        }
        else if(playerSelection=='scissors'&&computerSelection=='paper')
        {
            // If the player throws scissor and the computer paper
            // Player wins
            score=1;
            
            console.log('The Player Won'); 
            
            
            
        }
        else if(playerSelection=='paper'&&computerSelection=='rock')
        {
            // If the player throws paper and the computer rock
            // Player wins
            score=1;   
            
            console.log('The Player Won'); 
           
            
        }
        else
        {
            // If there is no tie or the player has not won then the computer wins.
            
            console.log('The Computer Won');
            
            score=-1;       
        }
        return score;
    }


 

    