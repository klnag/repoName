import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");

const h1 = document.getElementById("h1_0");

h1.addEventListener("mousedown", (e) => {

    if(e.target.className === "mov") {
        const s = e.target
        if(!s.style.transform) s.style.transform = `translate(0px, 0px)`


        function onMouseMove(event) {
            // s.style.transform = `translate(${}px, ${}px)`
            console.log(s.style.transform)
            console.log(event)
        }
        
        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }
})

lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);
