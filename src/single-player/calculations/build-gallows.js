function buildGallows() {
    const gallowsNode = document.getElementById('gallows');
    const gallowsArray = [  
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
    for(let index = 0; index < gallowsArray.length; index++) {
        const penaltyBlock = document.createElement('div');
        const blockImage = document.createElement('img');
        blockImage.src = gallowsArray[index].imgSrc;
        blockImage.width = gallowsArray[index].imgWidth;
        penaltyBlock.classList.add('penalty-block');
        blockImage.classList.add('hidden-img');
        penaltyBlock.id = gallowsArray[index].name;
        penaltyBlock.appendChild(blockImage);
        gallowsNode.appendChild(penaltyBlock);
    }
}

export default buildGallows;