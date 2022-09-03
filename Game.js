score =0;
let cross = true;
document.onkeydown = function(e) {
    console.log("Key code is", e.keyCode)
    if(e.keyCode == 38){
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }

    if(e.keyCode == 39){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 +"px";
    }

    if(e.keyCode == 37){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        
        player.style.left = playerX - 112 +"px";
        rotate
    }
}

setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    
    offsetX = Math.abs(px-ox);
    offsetY = Math.abs(py-oy);
    if ( offsetX < 95 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetX < 80 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.1 ;
            obstacle.style.animationDuration = newDur + 's';
            console.log(newDur);
        }, 500);
    }
}, 10);

function updateScore(score) {
   scoreCont.innerHTML = "Your score: " + score 
}