// this is use to only change view of page 
// Make constructor for changing elements in html: score, timer, game blocks 

export class GameView {
    constructor() {
        this.scoreElement = document.getElementById('score');
        this.timerElement = document.getElementById('timer');
        this.gameBlocks = Array.from(document.querySelectorAll('.game-block'));
    }

    resetView() {
        this.scoreElement.textContent = '0';
        this.timerElement.textContent = '30';
        this.gameBlocks.forEach((block) => {
            block.innerHTML = '';
        });
    }

    updateScore(score) {
        this.scoreElement.textContent = score;
    }

    updateTimer(timer) {
        this.timerElement.textContent = timer;
    }

    setMoleVisibility(id, visible) {
        const block = this.gameBlocks.find((block) => {
            return block.id == id});
        if (block) {
            if (visible) {
                block.innerHTML = '<img src="./images/mole.jpg" />';
            } else {
                block.innerHTML = '';
            }
        }
    }
}