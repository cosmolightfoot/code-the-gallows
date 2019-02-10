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
        name: 'wings',
        imgSrc: '../assets/wings-1.png',
        imgWidth: 500
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
    },
];

//builds gallows images
for(let index = 0; index < buildGallows.length; index++) {
    const penaltyBlock = document.createElement('div');
    const blockImage = document.createElement('img');
    blockImage.width = buildGallows[index].imgWidth;
    blockImage.src = buildGallows[index].imgSrc;
    blockImage.classList.add('hidden-img');
    penaltyBlock.classList.add('penalty-block');
    penaltyBlock.id = buildGallows[index].name;
    penaltyBlock.appendChild(blockImage);
    gallowsNode.appendChild(penaltyBlock);
}

const rowOneNode = document.getElementById('row-one');
const rowTwoNode = document.getElementById('row-two');
const rowThreeNode = document.getElementById('row-three');

const buildLetterButtons = [
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
        letter: 'F'
    },
    {
        letter: 'G'
    },
    {
        letter: 'H'
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
        letter: 'A'
    },
    {
        letter: 'E'
    },
    {
        letter: 'I'
    },
    {
        letter: 'O'
    },
    {
        letter: 'U'
    },
    {
        letter: 'Y'
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
        letter: 'V'
    },
    {
        letter: 'W'
    },
    {
        letter: 'X'
    },
    {
        letter: 'Z'
    }
];

const wordList = ['awkward', 'bagpipes', 'banjo', 'bungler', 'croquet', 'crypt', 'dwarves', 'fervid', 'fishhook', 'fjord', 'gazebo', 'gypsy', 'haiku', 'haphazard', 'hyphen', 'ivory', 'jazzy', 'jiffy', 'jinx', 'jukebox', 'kayak', 'kiosk', 'klutz', 'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'quad', 'quip', 'rhythmic', 'rogue', 'sphinx', 'squawk', 'swivel', 'toady', 'twelfth', 'unzip', 'waxy', 'wildebeest', 'yacht', 'zealous', 'zigzag', 'zippy', 'zombie', 'abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', '', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac'];

//builds letter buttons

//row1
for(let index = 0; index < 10; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;
    rowOneNode.appendChild(letterButton);
}
//row2
for(let index = 10; index < 18; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;

    rowTwoNode.appendChild(letterButton);
//row3
}
for(let index = 18; index < 26; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.textContent = buildLetterButtons[index].letter;

    rowThreeNode.appendChild(letterButton);
}


let ranNum = Math.floor(Math.random() * wordList.length);
let objectiveWord = wordList[ranNum];
const objectiveNode = document.getElementById('obj-letters');
const underlineNode = document.getElementById('underline');
let wordSplit = objectiveWord.split('');
//create obj letters
for(let i = 0; i < wordSplit.length; i++) {
    const objLetter = document.createElement('span');
    objLetter.id = 'obj-letter-' + i;
    objLetter.textContent = wordSplit[i];
    objLetter.classList.add('obj-letter');
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



function checkLetter(letter) {
    let trueArray = [];
    let selectHiddenLetters = document.querySelectorAll('.hidden-letter');
    for(let i = 0; i < wordSplit.length; i++) {
        if(wordSplit[i] === letter) {
            selectHiddenLetters[i].classList.remove('hidden-letter');
            trueArray.push(i);
            wordSplit.splice(i, 1);
        }
        
    }
    selectHiddenLetters = document.querySelectorAll('.hidden-letter');
}

checkLetter();

