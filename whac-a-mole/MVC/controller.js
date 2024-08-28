import { GameModel } from "./model.js";
import { GameView } from "./view.js";

// load data
document.addEventListener('DOMContentLoaded', () => {
    const model = new GameModel();
    const view = new GameView();
    let spawnInterval, timerInterval;  // this will store function (for clearInterval we need to give function to stop)

    document.getElementById('start-button').addEventListener('click', startGame);

    view.gameBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const blockId = parseInt(block.id, 10);
            const blockState = model.gameState.find(b => b.id === blockId);
            if (blockState.hasMole) {
                const newScore = model.incrementScore();
                view.updateScore(newScore);
                view.setMoleVisibility(blockId, false);
                model.setMole(blockId, false);
            }
        });
    });

// Restet everything: model, view, intervals
    function startGame() {
        model.resetGame();
        view.resetView();
        timerInterval = setInterval(updateTimer, 1000);
        spawnInterval = setInterval(spawnMole, 1000);
    }

// this function will run every 1 second when we will give to setInterval and stop when timer hits 0
    function updateTimer() {
        const timer = model.updateTimer();
        view.updateTimer(timer);
        if (timer <= 0) {
            clearInterval(timerInterval);
            clearInterval(spawnInterval);
            alert('Time is Over!');
            view.resetView();
            model.resetGame();
        }
    }

// first check for available slots
// then randomly select number for this array
// array contain block objects which have id property. we can use that to change visibilty of block and also set
    function spawnMole() {
        const availableBlocks = model.getAvailableBlocks();
        if (availableBlocks.length > 0) {
            const molesOnBoard = model.getMoleCount();
            if (molesOnBoard < model.maxMoles) {
                const randomBlock = availableBlocks[Math.floor(Math.random() * availableBlocks.length)];
                view.setMoleVisibility(randomBlock.id, true);
                model.setMole(randomBlock.id, true);
            }
        }
    }
});
