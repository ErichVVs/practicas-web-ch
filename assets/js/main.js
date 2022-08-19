let pupilHTMLCollection = document.getElementsByClassName('pupil');
let pupilArray = Array.from (pupilHTMLCollection);

let input = {
    mouseX:{
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY:{
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
}

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

let output = {
    x:{
        start: -75, 
        end: 75,
        current: 0,
    },
    y:{
        start: -75,
        end: 75,
        current: 0,
    }
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

let handlerMouseMove = function (event) {

    input.mouseX.current = event.clientX;
    input.mouseX.fraction = 
        (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    input.mouseY.current = event.clientY;
    input.mouseY.fraction = 
        (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    output.x.current = output.x.start + output.x.range * input.mouseX.fraction;
    output.y.current = output.y.start + output.y.range * input.mouseY.fraction;

    pupilArray.forEach(function (pupil, k) {
        pupil.style.transform = 
            "translate(" + output.x.current + "px," + output.y.current + "px)";
    });
};

let handlerResize = function () {};

window.addEventListener("mousemove", handlerMouseMove);
