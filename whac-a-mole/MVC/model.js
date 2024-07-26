// Make constructor to hold game components: score, timer, maxmoles, array containing block object with id and mole status
export class GameModel {
    constructor() {
        this.score = 0;
        this.timer = 30;
        this.maxMoles = 3;
        this.gameState = Array.from({ length: 12 }, (_, index) => ({
            id: index + 1,
            hasMole: false,
        }));
    }

// Reset all component to default
    resetGame() {
        this.score = 0;
        this.timer = 30;
        this.gameState.forEach((block) => {
            return block.hasMole = false;
        });
    }

    updateTimer() {
        this.timer--;
        return this.timer;
    }

    incrementScore() {
        this.score++;
        return this.score;
    }

// filter only blocks without mole
    getAvailableBlocks() {
        return this.gameState.filter((block) => {
            return !block.hasMole;
        });
    }

// filter blocks with moles
    getMoleCount() {
        return this.gameState.filter(block => block.hasMole).length;
    }

// set method for changing mole status
    setMole(id, hasMole) {
        const block = this.gameState.find((block) => {
            return block.id === id;
        });
        if (block) {
            block.hasMole = hasMole;
        }
    }
}