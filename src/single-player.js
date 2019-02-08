const gallowsNode = document.getElementById('gallows');
const buildGallows = [
    {
        name: 'head',
        imgSrc: ''
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
    penaltyBlock.classList.add('penalty-block');
    penaltyBlock.textContent = buildGallows[index].name;
    console.log(penaltyBlock);
    penaltyBlock.id = buildGallows[index].name;
    gallowsNode.appendChild(penaltyBlock);
}
