export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 0; i < 14; i++) {
            this.stack.push('clubs_'+1);
            this.stack.push('diamonds_'+1);
            this.stack.push('hearths_'+1);
            this.stack.push('spade_'+1);
            
        }
        shuffle(this.stack);
    }

   
}

function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}