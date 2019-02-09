const gallowsNode = document.getElementById('gallows');
const buildGallows = [
    {
        name: 'head',
        imgSrc: '../assets/will-ferrell-1.png',
        imgWidth: 100
    },
    {
        name: 'torso',
        imgSrc: '../assets/mannequin-torso-1.png',
        imgWidth: 170
    },
    {
        name: 'left-arm',
        imgSrc: '../assets/celery-hand-1.png',
        imgWidth: 300
    },
    {
        name: 'right-arm',
        imgSrc: '../assets/right-arm-1.jpg',
        imgWidth: 150
    },
    {
        name: 'crotch',
        imgSrc: '../assets/longhorn.png',
        imgWidth: 120
    },
    {
        name: 'left-leg',
        imgSrc:'../assets/tentacles-2.png',
        imgWidth: 225
    },
    {
        name: 'right-leg',
        imgSrc:'../assets/tentacles-1.png',
        imgWidth: 225
    }
];

for(let index = 0; index < buildGallows.length; index++) {
    const penaltyBlock = document.createElement('div');
    const blockImage = document.createElement('img');
    blockImage.width = buildGallows[index].imgWidth;
    blockImage.src = buildGallows[index].imgSrc;
    penaltyBlock.classList.add('penalty-block');
    penaltyBlock.id = buildGallows[index].name;
    penaltyBlock.appendChild(blockImage);
    gallowsNode.appendChild(penaltyBlock);
}

const letterButtonsNode = document.getElementById('letter-buttons');
const rowOneNode = document.getElementById('row-one');
const rowTwoNode = document.getElementById('row-two');
const rowThreeNode = document.getElementById('row-three');

const buildLetterButtons = [
    {
        letter: 'A'
    },
    {
        letter: 'B'
    },
    {
        letter: 'C'
    },
    {
        letter: 'D'
    },
    {
        letter: 'E'
    },
    {
        letter: 'F'
    },
    {
        letter: 'G'
    },
    {
        letter: 'H'
    },
    {
        letter: 'I'
    },
    {
        letter: 'J'
    },
    {
        letter: 'K'
    },
    {
        letter: 'L'
    },
    {
        letter: 'M'
    },
    {
        letter: 'N'
    },
    {
        letter: 'O'
    },
    {
        letter: 'P'
    },
    {
        letter: 'Q'
    },
    {
        letter: 'R'
    },
    {
        letter: 'S'
    },
    {
        letter: 'T'
    },
    {
        letter: 'U'
    },
    {
        letter: 'V'
    },
    {
        letter: 'W'
    },
    {
        letter: 'X'
    },
    {
        letter: 'Y'
    },
    {
        letter: 'Z'
    }
];

// for(let index = 0; index < buildLetterButtons.length; index++) {
//     const letterButton = document.createElement('button');
//     letterButton.classList.add('letter-button');
//     letterButton.textContent = buildLetterButtons[index].letter;

//     letterButtonsNode.appendChild(letterButton);
// }
console.log(rowOneNode);
for(let index = 0; index < 10; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;

    rowOneNode.appendChild(letterButton);
}
for(let index = 10; index < 18; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;

    rowTwoNode.appendChild(letterButton);
}
for(let index = 18; index < 26; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;

    rowThreeNode.appendChild(letterButton);
}
