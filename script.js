import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

import {moving} from "./moving.js";

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");


const h1 = document.getElementById("h1_0");


h1.addEventListener("mousedown", moving);



lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);
