function buildObjectiveWord(wordSplit) {
    const objectiveNode = document.getElementById('obj-letters');
    const underlineNode = document.getElementById('underline');
    //create obj letters
    for(let i = 0; i < wordSplit.length; i++) {
        const objLetter = document.createElement('span');
        objLetter.id = 'obj-letter-' + i;
        objLetter.textContent = wordSplit[i];
        objLetter.classList.add('obj-letter');
        objLetter.classList.add(wordSplit[i]);
        objLetter.classList.add('hidden-letter');
        objectiveNode.appendChild(objLetter);
    }
    //create obj underlines
    for(let i = 0; i < wordSplit.length; i++) {
        const underline = document.createElement('span');
        underline.textContent = '_';
        underline.classList.add('underline');
        underlineNode.appendChild(underline);
    }
}
export default buildObjectiveWord;