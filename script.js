import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

import {ctlf} from "./ctl.js";
import {ctrf} from "./ctr.js";
import {cblf} from "./cbl.js";
import {cbrf} from "./cbr.js";

import {moving} from "./moving.js";

const h1 = document.getElementById("h1_0");

// const lb = document.getElementById("lb");
// const lt = document.getElementById("lt");
// const lr = document.getElementById("lr");
// const ll = document.getElementById("ll");

// const ctl = document.getElementById("ctl");
// const ctr = document.getElementById("ctr");
// const cbl = document.getElementById("cbl");
// const cbr = document.getElementById("cbr");

// h1.addEventListener("mousedown", moving);

// lt.addEventListener("mousedown", ltf);
// lb.addEventListener("mousedown", lbf);
// lr.addEventListener("mousedown", lrf);
// ll.addEventListener("mousedown", llf);

// ctl.addEventListener("mousedown", ctlf);
// ctr.addEventListener("mousedown", ctrf);
// cbl.addEventListener("mousedown", cblf); 
// cbr.addEventListener("mousedown", cbrf);

let prev = null;

document.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.id === "ctr" || e.target.id === "ctl" || e.target.id === "cbl" || e.target.id === "cbr" || e.target.id === "lt" || e.target.id === "ll" || e.target.id === "lr" || e.target.id === "lb") {}
    else{

        
        // Check if a previous element has been clicked and if the current target is different from it
        if (prev && prev.target !== e.target) {
            // Remove the four divs from the previously clicked element if they exist
            const prevChildren = prev.target.children;
            for (let i = prevChildren.length - 1; i >= 0; i--) {
                const child = prevChildren[i];
                if (child.id === "ctr" || child.id === "ctl" || child.id === "cbl" || child.id === "cbr" || child.id === "lt" || child.id === "ll" || child.id === "lr" || child.id === "lb") {
                    prev.target.removeChild(child);
                    prev.target.classList.remove("mov");
                }
            }
        }
    }
    
    // Add the four divs to the current target if they do not exist
    let g = false;
    for (const child of e.target.children) {
        if (child.id === "ctr") {
            g = true;
            break;
        }
    }
    if (!g && !(e.target.id === "ctr" || e.target.id === "ctl" || e.target.id === "cbl" || e.target.id === "cbr" || e.target.id === "lt" || e.target.id === "ll" || e.target.id === "lr" || e.target.id === "lb")) {
        const ctr = document.createElement("div");
        const ctl = document.createElement("div");
        const cbl = document.createElement("div");
        const cbr = document.createElement("div");

        const lt = document.createElement("div");
        const ll = document.createElement("div");
        const lr = document.createElement("div");
        const lb = document.createElement("div");

        ctr.id = "ctr";
        ctl.id = "ctl";
        cbl.id = "cbl";
        cbr.id = "cbr";
        
        lt.id = "lt";
        ll.id = "ll";
        lr.id = "lr";
        lb.id = "lb";

        ctr.addEventListener("mousedown", ctrf)
        ctl.addEventListener("mousedown", ctlf)
        cbl.addEventListener("mousedown", cblf)
        cbr.addEventListener("mousedown", cbrf)

        lt.addEventListener("mousedown", ltf)
        ll.addEventListener("mousedown", llf)
        lr.addEventListener("mousedown", lrf)
        lb.addEventListener("mousedown", lbf)

        e.target.appendChild(ctr);
        e.target.appendChild(ctl);
        e.target.appendChild(cbl);
        e.target.appendChild(cbr);

        e.target.appendChild(lt);
        e.target.appendChild(ll);
        e.target.appendChild(lr);
        e.target.appendChild(lb);

        e.target.className = "mov"
        e.target.addEventListener("mousedown", moving);

    }
    
    // Update the previously clicked element to the current target
    prev = e;
});
