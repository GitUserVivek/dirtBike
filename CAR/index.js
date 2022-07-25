var car = document.getElementById("car");
var area = document.getElementById("area");

var obj1 = document.getElementById("obj1");
var obj2 = document.getElementById("obj2");
var obj3 = document.getElementById("obj3");


var roadline1 = document.getElementById("roadline1");
var roadline2 = document.getElementById("roadline2");
var roadline3 = document.getElementById("roadline3");
var roadline4 = document.getElementById("roadline4");
var roadline5 = document.getElementById("roadline5");
var roadline6 = document.getElementById("roadline6");

var rdline = {

}
var player = { speed: 3 }
var objects = {

}
let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

document.addEventListener("keyup", KeyUp);
document.addEventListener("keydown", KeyDown);

start()

function KeyUp(e) {
    e.preventDefault();
    rotateu();
    keys[e.key] = false;
}

function KeyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
    rotated();
}

function gameplay() {

    var car = document.getElementById("car");
    if (player.start) {

        if (player.x < player.areaX || player.x > player.areaX + 480) {
            window.alert("PLAYER OUT")
            rotateu();
            end();

        }
        if (((player.x + 40 >= objects.x1) && (player.x < objects.x1 + 70)) && ((player.y <= objects.y1 + 100) && (player.y + 90 > objects.y1))) {
            alert("OUUUUT");
            rotateu()
            end()
        }
        if (((player.x + 40 >= objects.x2) && (player.x < objects.x2 + 70)) && ((player.y <= objects.y2 + 100) && (player.y + 90 > objects.y2))) {
            alert("OUUUUT");
            rotateu()
            end()
        }
        if (((player.x + 40 >= objects.x3) && (player.x < objects.x3 + 70)) && ((player.y <= objects.y3 + 100) && (player.y + 90 > objects.y3))) {
            alert("OUUUUT");
            rotateu()
            end()
        }
        if (player.y < player.areaY) {
            player.y = player.areaY;
        }
        if (player.y > player.areaY + 540) {
            player.y = player.areaY + 540;
        }
        if (keys.ArrowUp) { player.y -= player.speed }
        if (keys.ArrowDown) { player.y += player.speed }
        if (keys.ArrowLeft) { player.x -= player.speed }
        if (keys.ArrowRight) { player.x += player.speed }
        car.style.left = player.x + "px";
        car.style.top = player.y + "px";


        window.requestAnimationFrame(gameplay)
    }
}
var s = 5;
var objectSpeed = 5;

function anim() {

    rdline.first += s;
    rdline.second += s;
    rdline.third += s;

    rdline.fourth += s;
    rdline.fifth += s;

    objects.y1 += objectSpeed;
    obj1.style.top = objects.y1 + "px";


    objects.y2 += objectSpeed;
    obj2.style.top = objects.y2 + "px";


    objects.y3 += objectSpeed;
    obj3.style.top = objects.y3 + "px";


    roadline1.style.top = rdline.first + "px";
    roadline2.style.top = rdline.second + "px";
    roadline3.style.top = rdline.third + "px";
    roadline4.style.top = rdline.fourth + "px";
    roadline5.style.top = rdline.fifth + "px";

    if (rdline.fifth > 600) {
        rdline.first = -30;
        rdline.second = 100;
        rdline.third = 230;
        rdline.fourth = 360;
        rdline.fifth = 490;

        roadline1.style.top = rdline.first + "px";
        roadline2.style.top = rdline.second + "px";
        roadline3.style.top = rdline.third + "px";


    }

    if (objects.y1 > 600) {
        objects.y1 = 0;
        objects.x1 = ((Math.random() * 400) + 400)
        obj1.style.left = objects.x1 + "px";


    }
    if (objects.y2 > 600) {
        objects.y2 = 0;
        objects.x2 = ((Math.random() * 400) + 400)
        obj2.style.left = objects.x2 + "px";
    }

    if (objects.y3 > 600) {
        objects.y3 = 0;
        objects.x3 = ((Math.random() * 400) + 400)
        obj3.style.left = objects.x3 + "px";
    }

    window.requestAnimationFrame(anim);

}

function start() {
    window.requestAnimationFrame(anim);

    player.start = true;

    player.areaX = area.offsetLeft;
    player.areaY = area.offsetTop;

    rdline.first = roadline1.offsetTop;
    rdline.second = roadline2.offsetTop;
    rdline.third = roadline3.offsetTop;
    rdline.fourth = roadline4.offsetTop;
    rdline.fifth = roadline5.offsetTop;

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    objects.x1 = obj1.offsetLeft;
    objects.y1 = obj1.offsetTop;

    objects.x2 = obj2.offsetLeft;
    objects.y2 = obj2.offsetTop;

    objects.x3 = obj3.offsetLeft;
    objects.y3 = obj3.offsetTop;


    window.requestAnimationFrame(gameplay)

}

function end() {
    keys.ArrowUp = false
    keys.ArrowDown = false
    keys.ArrowLeft = false
    keys.ArrowRight = false
    player.x = 450;
    player.y = 545;
    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

}

function rotated() {
    if (keys.ArrowLeft == true) {
        car.classList.add("rotateL")
    }
    if (keys.ArrowRight == true) {
        car.classList.add("rotateR")
    }
}

function rotateu() {

    if (keys.ArrowLeft == true) {
        car.classList.remove("rotateL")
    }
    if (keys.ArrowRight == true) {
        car.classList.remove("rotateR")
    }
}























/*

    (x || x+40)


*/