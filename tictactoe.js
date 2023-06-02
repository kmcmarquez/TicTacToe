let gameStatus = "playerone";
let firstBoxStatus = "notselected";
let secondBoxStatus = "notselected";
let thirdBoxStatus = "notselected";
let fourthBoxStatus = "notselected";
let fifthBoxStatus = "notselected";
let sixthBoxStatus = "notselected";
let seventhBoxStatus = "notselected";
let eighthBoxStatus = "notselected";
let ninthBoxStatus = "notselected";
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneName ;
let playerTwoName ;






function checkResults (){

    if (gameStatus == "playerone"){
        document.getElementById ("gameStatus").innerHTML = playerOneName + "'s turn";

    }else if (gameStatus = "playertwo"){
        document.getElementById ("gameStatus").innerHTML = playerTwoName + "'s turn";
    }

                if (firstBoxStatus =="playerOneSelected" && secondBoxStatus == "playerOneSelected" && thirdBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();

                }else if (firstBoxStatus =="playerTwoSelected" && secondBoxStatus == "playerTwoSelected" && thirdBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (fourthBoxStatus =="playerOneSelected" && fifthBoxStatus == "playerOneSelected" && sixthBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (fourthBoxStatus =="playerTwoSelected" && fifthBoxStatus == "playerTwoSelected" && sixthBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (seventhBoxStatus =="playerOneSelected" && eighthBoxStatus == "playerOneSelected" && ninthBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (seventhBoxStatus =="playerTwoSelected" && eighthBoxStatus == "playerTwoSelected" && ninthBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (firstBoxStatus == "playerOneSelected" && fourthBoxStatus == "playerOneSelected" && seventhBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (firstBoxStatus == "playerTwoSelected" && fourthBoxStatus == "playerTwoSelected" && seventhBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (secondBoxStatus == "playerOneSelected" && fifthBoxStatus == "playerOneSelected" && eighthBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (secondBoxStatus == "playerTwoSelected" && fifthBoxStatus == "playerTwoSelected" && eighthBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (thirdBoxStatus == "playerOneSelected" && sixthBoxStatus == "playerOneSelected" && ninthBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (thirdBoxStatus == "playerTwoSelected" && sixthBoxStatus == "playerTwoSelected" && ninthBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (firstBoxStatus == "playerOneSelected" && fifthBoxStatus == "playerOneSelected" && ninthBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (firstBoxStatus == "playerTwoSelected" && fifthBoxStatus == "playerTwoSelected" && ninthBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (thirdBoxStatus == "playerOneSelected" && fifthBoxStatus == "playerOneSelected" && seventhBoxStatus == "playerOneSelected"){
                    
                    playerOneScore = playerOneScore + 1;
                    reset();
                }else if (thirdBoxStatus == "playerTwoSelected" && fifthBoxStatus == "playerTwoSelected" && seventhBoxStatus == "playerTwoSelected"){
                    
                    playerTwoScore = playerTwoScore + 1;
                    reset();
                }else if (firstBoxStatus != "notselected" && secondBoxStatus != "notselected" && thirdBoxStatus != "notselected" && fourthBoxStatus != "notselected" && fifthBoxStatus != "notselected" && sixthBoxStatus != "notselected" && seventhBoxStatus != "notselected" && eighthBoxStatus != "notselected" && ninthBoxStatus != "notselected"){
                    alert ("PAREHAS KAYONG TANGA");
                    reset ();
                }
    
    
    
    
    document.getElementById ('mainScore').innerHTML = playerOneScore + ":" + playerTwoScore;
    

    if (playerOneScore == 5){
        alert ("Player One Wins!")
        reset();
        playerOneScore = 0;
        playerTwoScore = 0;
        document.getElementById ('mainScore').innerHTML = playerOneScore + ":" + playerTwoScore;
    }else if (playerTwoScore == 5){
        alert ("Player Two Wins!")
        reset();
        playerOneScore = 0;
        playerTwoScore = 0;
        document.getElementById ('mainScore').innerHTML = playerOneScore + ":" + playerTwoScore;
    }

}


function makeMove(x,y){
    if (x == 0 && y == 0){

        if (firstBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('firstBox').innerHTML = "x";
            gameStatus = "playertwo";
            firstBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('firstBox').innerHTML = "o";
                gameStatus = "playerone";
                firstBoxStatus = "playerTwoSelected";
            }
        }else if (firstBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (firstBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }

        
    }else if (x == 0 && y == 1){

        if (secondBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('secondBox').innerHTML = "x";
            gameStatus = "playertwo";
            secondBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('secondBox').innerHTML = "o";
                gameStatus = "playerone";
                secondBoxStatus = "playerTwoSelected";
            }
        }else if (secondBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (secondBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }



        
    }else if (x == 0 && y == 2){

        if (thirdBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('thirdBox').innerHTML = "x";
            gameStatus = "playertwo";
            thirdBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('thirdBox').innerHTML = "o";
                gameStatus = "playerone";
                thirdBoxStatus = "playerTwoSelected";
            }
        }else if (thirdBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (thirdBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }





    }else if (x == 1 && y == 0){

        if (fourthBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('fourthBox').innerHTML = "x";
            gameStatus = "playertwo";
            fourthBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('fourthBox').innerHTML = "o";
                gameStatus = "playerone";
                fourthBoxStatus = "playerTwoSelected";
            }
        }else if (fourthBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (fourthBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }



    }else if (x == 1 && y == 1){

        if (fifthBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('fifthBox').innerHTML = "x";
            gameStatus = "playertwo";
            fifthBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('fifthBox').innerHTML = "o";
                gameStatus = "playerone";
                fifthBoxStatus = "playerTwoSelected";
            }
        }else if (fifthBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (fifthBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }



    }else if (x == 1 && y == 2){

        if (sixthBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('sixthBox').innerHTML = "x";
            gameStatus = "playertwo";
            sixthBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('sixthBox').innerHTML = "o";
                gameStatus = "playerone";
                sixthBoxStatus = "playerTwoSelected";
            }
        }else if (sixthBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (sixthBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }



    }else if (x == 2 && y == 0){

        if (seventhBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('seventhBox').innerHTML = "x";
            gameStatus = "playertwo";
            seventhBoxStatus = "playerOneSelected";
            

            }else if (gameStatus == "playertwo"){
                document.getElementById ('seventhBox').innerHTML = "o";
                gameStatus = "playerone";
                seventhBoxStatus = "playerTwoSelected";
            }
        }else if (seventhBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                

        }else if (seventhBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")

        }



    }else if (x == 2 && y == 1){

        if (eighthBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('eighthBox').innerHTML = "x";
            gameStatus = "playertwo";
            eighthBoxStatus = "playerOneSelected";
            
    
            }else if (gameStatus == "playertwo"){
                document.getElementById ('eighthBox').innerHTML = "o";
                gameStatus = "playerone";
                eighthBoxStatus = "playerTwoSelected";
            }
        }else if (eighthBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                
    
        }else if (eighthBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")
    
        }
    
    
    
    }else if (x == 2 && y == 2){

        if (ninthBoxStatus == "notselected"){
            if (gameStatus == "playerone"){
            document.getElementById ('ninthBox').innerHTML = "x";
            gameStatus = "playertwo";
            ninthBoxStatus = "playerOneSelected";
            
    
            }else if (gameStatus == "playertwo"){
                document.getElementById ('ninthBox').innerHTML = "o";
                gameStatus = "playerone";
                ninthBoxStatus = "playerTwoSelected";
            }
        }else if (ninthBoxStatus == "playerOneSelected"){
            alert ("This box has already been selected by Player One")
                
    
        }else if (ninthBoxStatus == "playerTwoSelected"){
            alert ("This box has already been selected by Player Two")
    
        }
    
    
    
    }

    checkResults();
}

function reset (){
    gameStatus = "playerone";
    firstBoxStatus = "notselected";
    secondBoxStatus = "notselected";
    thirdBoxStatus = "notselected";
    fourthBoxStatus = "notselected";
    fifthBoxStatus = "notselected";
    sixthBoxStatus = "notselected";
    seventhBoxStatus = "notselected";
    eighthBoxStatus = "notselected";
    ninthBoxStatus = "notselected";


    document.getElementById('firstBox').innerHTML = "";
    document.getElementById('secondBox').innerHTML = "";
    document.getElementById('thirdBox').innerHTML = "";
    document.getElementById('fourthBox').innerHTML = "";
    document.getElementById('fifthBox').innerHTML = "";
    document.getElementById('sixthBox').innerHTML = "";
    document.getElementById('seventhBox').innerHTML = "";
    document.getElementById('eighthBox').innerHTML = "";
    document.getElementById('ninthBox').innerHTML = "";

}

function submitNames (){
    playerOneName = document.getElementById ("playerOneNameInput"). value; let playerOneNameLength = playerOneName.length;
    playerTwoName = document.getElementById ("playerTwoNameInput"). value; let playerTwoNameLength = playerTwoName.length;
    if (playerOneName == ""){
        alert ("Please provide a name for Player One")
    }else if (playerTwoName == ""){
        alert ("Please provide a name for Player Two")

    }else if (playerOneNameLength > 5 || playerTwoNameLength > 5){
        alert ("Maximum of 5 characters for a PlayerName")

    }else {
        document.getElementById ("playerOneName").innerHTML = playerOneName;
        document.getElementById ("playerTwoName").innerHTML = playerTwoName;
        document.getElementById ("mainGame").style.display = "block";
        document.getElementById ("submitForm").style.display = "none";
        document.getElementById ("gameStatus").innerHTML = playerOneName + "'s turn";
    }

}

function home (){
    location.reload();
}