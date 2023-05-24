import Character from './domain.js'

class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }


//const domainGame = new Game();
//export default domainGame;
export default Game;

export {GameSavingData, readGameSaving, writeGameSaving};