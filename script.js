const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");
const s = document.getElementById("s");

let x = 0
let xx = 0
let v = false
s.style.transform = `translate(0px, 0px)`
console.log(x)
lt.addEventListener("mousedown", function(event) {
  

  event.preventDefault();

  const startHeight = parseInt(getComputedStyle(s).height, 10);
  const startY = event.clientY;

  // x = Number(s.style.transform.slice(10).split(", ")[1].slice(0,-3))
  const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
  console.log(s.style.transform)
  x= match[2]
  function onMouseMove(event) {
    // console.log(s.style.transform.slice(0, -8).slice(11))
    // const tx = match[1]
    // const ty = match[2]

    const diffY = event.clientY - startY;
    const newHeight = startHeight - diffY;
    console.log(match[1],Number(x)+diffY)
    s.style.height = newHeight + "px";
    // console.log(s.style.transform.slice(10).split(", "))
    s.style.transform = `translate(${match[1]}px, ${Number(x)+diffY}px)`
    // childe.style.height = newHeight + "px";
    // childe.style.transform = `translateY(${x+diffY}px)`
    // childe.style.height = newHeight + "px";
    // childe.style.transform = `translateY( ${( newHeight )}px)`

  }
  function onMouseUp() {

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});


lb.addEventListener("mousedown", function(event) {
  const childe = event.target.parentElement.children[8]
  const startHeight = parseInt(getComputedStyle(s).height, 10);
  const startY = event.clientY;

  function onMouseMove(event) {
    const diffY = (startY - event.clientY) * -1;
    s.style.height = startHeight + diffY + "px";  
    childe.style.height = startHeight + diffY + "px";
    
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});


lr.addEventListener("mousedown", function(event) {
  const childe = event.target.parentElement.children[8]
  const startwidth = parseInt(getComputedStyle(s).width, 10);
  const startY = event.clientX;

  function onMouseMove(event) {
    const diffY = (startY - event.clientX) * -1;
    s.style.width = startwidth + diffY + "px";  
    childe.style.width = startwidth + diffY + "px";
    
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});











ll.addEventListener("mousedown", function(event) {
  event.preventDefault();

  const startHeight = parseInt(getComputedStyle(s).width, 10);
  const startY = event.clientX;
  // s.style.transform = `translate(0px, 0px)`

  const match1 = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
  xx = match1[1]
  function onMouseMove(event) {
    const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
    
    const diffY = event.clientX - startY;
    console.log(Number(xx)+diffY)
    const newHeight = startHeight - diffY;
    s.style.width = newHeight + "px";
    s.style.transform = `translate(${Number(xx)+diffY}px, ${match[2]}px)`

  }
  function onMouseUp() {

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});
















document.addEventListener("contextmenu", () => {
  const element = s.children[8]
  s.remove(element)
  document.body.appendChild(element)
  element.style.height = s.style.height
  element.style.margin = "20rem"
  element.style.transform = s.style.transform
  console.log(element.style.transform,element.style.height)
})