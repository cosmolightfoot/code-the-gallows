function buildObjective(wordSplit) {
    const objectiveNode = document.getElementById('obj-letters');
    const underlineNode = document.getElementById('underline');
    for(let i = 0; i < wordSplit.length; i++) {
        const objLetter = document.createElement('span');
        objLetter.id = 'obj-letter-' + i;
        objLetter.textContent = wordSplit[i];
        objLetter.classList.add('obj-letter');
        objLetter.classList.add(wordSplit[i]);
        objLetter.classList.add('hidden-letter');
        objectiveNode.appendChild(objLetter);
    }
    for(let i = 0; i < wordSplit.length; i++) {
        const underline = document.createElement('span');
        underline.textContent = '_';
        underline.classList.add('underline');
        underlineNode.appendChild(underline);
    }
}
export default buildObjective;