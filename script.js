import {ltf} from "./lt.js";
import {lbf} from "./lb.js";
import {lrf} from "./lr.js";
import {llf} from "./ll.js";

const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");
const s = document.getElementById("s");

lt.addEventListener("mousedown", ltf);
lb.addEventListener("mousedown", lbf);
lr.addEventListener("mousedown", lrf);
ll.addEventListener("mousedown", llf);

document.addEventListener("contextmenu", () => {
  const element = s.children[8]
  s.remove(element)
  document.body.appendChild(element)
  element.style.height = s.style.height
  element.style.margin = "20rem"
  element.style.transform = s.style.transform
  console.log(element.style.transform,element.style.height)
})