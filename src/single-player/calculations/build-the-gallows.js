import gallowsArray from './gallows-array.js';
function buildTheGallows() {
    const gallowsNode = document.getElementById('gallows');
    for(let index = 0; index < gallowsArray.length; index++) {
        const penaltyBlock = document.createElement('div');
        const blockImage = document.createElement('img');
        blockImage.width = gallowsArray[index].imgWidth;
        blockImage.src = gallowsArray[index].imgSrc;
        blockImage.classList.add('hidden-img');
        penaltyBlock.classList.add('penalty-block');
        penaltyBlock.id = gallowsArray[index].name;
        penaltyBlock.appendChild(blockImage);
        gallowsNode.appendChild(penaltyBlock);
    }
}
export default buildTheGallows;