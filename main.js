let objects = [];
let counts = 120;

let randY = function () {
    return random(0, 601);
}

let randW = function () {
    return random(0, 51)
}

let randColor = function () {
    let ourColor = {
        r: random(0, 256),
        g: random(0, 256),
        b: random(0, 256)
    }

    return color(ourColor.r, ourColor.g, ourColor.b)
}

let randSpeed = function () {
    return random(2, 20);
}


function setup() {
    createCanvas(800, 600);
    background(51);

    for(let i = 0; i < counts; i++){
        objects.push( new Circle(200, randY(), randW(), randColor(), randSpeed()) )
    }

    console.log(objects);
}

function draw() {
    background(51);

    for(let i = 0; i < counts; i++){
       objects[i].draw(); 
       objects[i].move(); 
    }

    
}