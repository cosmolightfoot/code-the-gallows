const gallowsNode = document.getElementById('gallows');
const buildGallows = [
    {
        name: 'head',
        imgSrc: '../assets/will-ferrell-1.png',
        imgWidth: 125
    // },
    // {
    //     name: 'torso',
    //     imgSrc: ''
    // },
    // {
    //     name: 'left-arm',
    //     imgSrc: ''
    // },
    // {
    //     name: 'right-arm',
    //     imgSrc: ''
    // },
    // {
    //     name: 'left-leg',
    //     imgSrc:''
    // },
    // {
    //     name: 'right-leg',
    //     imgSrc:''
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
