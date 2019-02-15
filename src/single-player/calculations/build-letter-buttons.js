import checkLetter from './check-letter.js';
import wordSplit from '../single-player.js';

function buildLetterButtons() {
    const rowOneNode = document.getElementById('row-one');
    const rowTwoNode = document.getElementById('row-two');
    const rowThreeNode = document.getElementById('row-three');
    const buildLetterButtons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'a', 'e', 'i', 'o', 'u', 'y', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];



    //row1
    for(let index = 0; index < 10; index++) {
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter-button');
        letterButton.id = 'button-' + buildLetterButtons[index];
        letterButton.textContent = buildLetterButtons[index];
        letterButton.value = buildLetterButtons[index];
        rowOneNode.appendChild(letterButton);
        letterButton.addEventListener('click', function(){
            checkLetter(letterButton.value, wordSplit);
        });
    }
    //row2
    for(let index = 10; index < 18; index++) {
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter-button');
        letterButton.id = 'button-' + buildLetterButtons[index];
        letterButton.textContent = buildLetterButtons[index];
        letterButton.value = buildLetterButtons[index];
        rowTwoNode.appendChild(letterButton);
        letterButton.addEventListener('click', function(){
            checkLetter(letterButton.value, wordSplit);
        });
    }
    //row3

    for(let index = 18; index < 26; index++) {
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter-button');
        letterButton.id = 'button-' + buildLetterButtons[index];
        letterButton.textContent = buildLetterButtons[index];
        letterButton.value = buildLetterButtons[index];
        rowThreeNode.appendChild(letterButton);
        letterButton.addEventListener('click', function(){
            checkLetter(letterButton.value, wordSplit);
        });
    }
}
export default buildLetterButtons;