import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");

lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);
