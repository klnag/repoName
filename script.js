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

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");

const ctl = document.getElementById("ctl");
const ctr = document.getElementById("ctr");
const cbl = document.getElementById("cbl");
const cbr = document.getElementById("cbr");

h1.addEventListener("mousedown", moving);

lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);

ctl.addEventListener("mousedown", ctlf);
ctr.addEventListener("mousedown", ctrf);
cbl.addEventListener("mousedown", cblf);
cbr.addEventListener("mousedown", cbrf);