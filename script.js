import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");


const h1 = document.getElementById("h1_0");
let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix) {
    if(d) {

        
        const dx = event.clientX - initialX;
        const dy = event.clientY - initialY;
        const newMatrix = transformMatrix.translate(dx, dy);
        s.style.transform = newMatrix.toString();
    }
}

function onMouseUp(event) {
    d = false
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

h1.addEventListener("mousedown", (e) => {
    d = true
  if (e.target.className === "mov") {
    const s = e.target;
    const transformMatrix = new DOMMatrix(getComputedStyle(s).transform);
    let initialX = e.clientX;
    let initialY = e.clientY;

    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix);
    });

    document.addEventListener("mouseup", onMouseUp);
  }
});



lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);
