import buildGallows from './calculations/build-gallows.js';
import wordList from './calculations/word-list.js';
import buildObjective from './calculations/build-objective.js';
import buildLetterButtons from './calculations/build-letter-buttons.js'
//the selected word
let ranNum = Math.floor(Math.random() * wordList.length);
let objectiveWord = wordList[ranNum];
let wordSplit = objectiveWord.split('');
export default wordSplit;

buildGallows();
buildObjective(wordSplit);
buildLetterButtons();




//function reveals letters that match the objective word

