console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
    // make a dom reference
    // the movement tag
    let movemenDisplay = document.getElementById('movement');
    // canvas
    let game = document.getElementById('game')
    // set height and width
    // set some canvas configs
    game.setAttribute('height', 400);
    game.setAttribute('width', 800);
    // context
    //this returns a object context 
    let ctx = game.getContext('2d');

    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        //takes an x, y and the size which is height and width
        ctx.fillRect(x, y, size, size);
    }
  

})