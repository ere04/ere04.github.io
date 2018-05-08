JAVASCRIPT FILE
 
// JavaScript
// Elizabeth Reeves
// CIS 370 Final Project
// Sprint Race
 
var image = document.getElementById("redLight");
var ronaldo = document.getElementById("ronaldo");
var messi = document.getElementById("messi");
var winningPlayer = document.getElementById("winningPlayer");
winningPlayer.style.display = 'none';
 
 
// random number
    var number = Math.random() * 150;
    var number1 = Math.random() * 150;
    var raceStarted = false;
 
function turnGreen()
{
    image.src = "http://pixelartmaker.com/art/d53ff1aeae3e6be.png";
}
 
//Starts race and players run/sprint at random intervals
function startRace()
{
    raceStarted = true;
 
    setTimeout(function () {
        var newNumber = ((Math.random() * 150)+5) + number;
        var newNumber1 = ((Math.random() * 150)+5) + number1;
        
        ronaldo.style.marginLeft = newNumber + 'px';
                
        messi.style.marginLeft = newNumber1 + 'px';
        
        number = newNumber;
        number1 = newNumber1;
        
        
        
                var ronaldoDistance = ronaldo.style.marginLeft.slice(0, -4);
                var messiDistance = messi.style.marginLeft.slice(0, -4);
 
      
        
        // winner of race
        var width = screen.width;
        
        if (ronaldoDistance >= width - 100)
        {
document.getElementById("winningPlayer").src = " https://www.sportyghost.com/wp-content/uploads/2014/08/theultimateladsclub.com_.jpg ";
        messi.style.display = 'none';
        ronaldo.style.display = 'none';
        winningPlayer.style.display = 'list-item';
            
        }
        
     
        else if (ronaldoDistance >= width - 200)
        {           
            document.getElementById("winningPlayer").src  = " https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/V7hRLuVqxikh75uky/close-up-of-waving-flag-with-real-madrid-c-f-football-club-logo-seamless-loop-blue-background-editorial-animation-4k_hlgo00z9we_thumbnail-full01.png" onclick="reset()" style="width: 600px; height: 290px;" ";
            messi.style.display = 'none';
        ronaldo.style.display = 'none';
            winningPlayer.style.display = 'list-item';                
        }
        
        
        else
        {
            startRace();
        }       
    }, 750)       
}
 
 
//Puts players back to starting place for new sprint/run
function reset()
{
    image.src = "https://thumbs.dreamstime.com/b/start-button-17357238.jpg
    winningPlayer.style.display = 'none';
    messi.style.display = 'initial';
    ronaldo.style.display = 'initial';
    messi.style.marginLeft = 0;
    ronaldo.style.marginLeft = 0;
    messiDistance = 0;
    ronaldoDistance = 0;
    newNumber = 0;
    newNumber1 = 0;
    number = 0;
    number1 = 0;
}
