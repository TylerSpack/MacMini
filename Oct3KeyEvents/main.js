document.addEventListener("keydown", gokey);
let thebox = document.getElementById('mybox');
let mytop = thebox.offsetTop;
let myleft = thebox.offsetLeft;

function gokey(event) {
    // console.log(event.which);
    // console.log(mytop);

    switch (event.which) {
        case 37: //left
            myleft -= 5;
            thebox.style.left = `${myleft}px`;
            break;
        case 38: //up
            mytop -= 5;
            thebox.style.top = `${mytop}px`;
            break;
        case 39: //right
            myleft += 5;
            thebox.style.left = `${myleft}px`;
            break;
        case 40: //down
            mytop += 5;
            thebox.style.top = `${mytop}px`;
            break;
    }
    checkCollision(document.getElementById('mybox'), document.getElementById('mybox2'));
}

class Box {
    constructor(_left, _top, _id) {
        this.left = _left;
        this.top = _top;
        this.id = _id;
        document.getElementById(_id).style.left = _left;
        document.getElementById(_id).style.top = _top;
    }

    left;
    top;
    id;
    static boxes = [];

}

let firstBox = new Box(0, 20, 'mybox');
let secondBox = new Box(0, 250, 'mybox2');

function checkCollision(box1, box2) {
    if (box1.style.left > box2.style.left - box2.style.width &&
        box1.style.left < box2.style.left + box1.style.width)
    {
        console.log('true');
        // if (top1 > top2 - box1.style.height &&
        //     top1 < top2 + box1.style.height)
        // {
        //     console.log('collison');
        // }
    }

}
