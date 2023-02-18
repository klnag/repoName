const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const lr = document.getElementById("lr");
const ll = document.getElementById("ll");
const s = document.getElementById("s");

let x = 0
let xx = 0
let v = false
console.log(x)
lt.addEventListener("mousedown", function(event) {
  

  event.preventDefault();

  const startHeight = parseInt(getComputedStyle(s).height, 10);
  const startY = event.clientY;

  x = Number(s.style.transform.slice(0,-3).slice(11))
  function onMouseMove(event) {
    
    const diffY = event.clientY - startY;
    const newHeight = startHeight - diffY;
    // console.log(`${startHeight} + ${diffY} = ` + (startHeight + diffY) ,x)
    s.style.height = newHeight + "px";
    s.style.transform = `translateY(${x+diffY}px)`
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

  xx = Number(s.style.transform.slice(0,-3).slice(11))
  function onMouseMove(event) {
    
    const diffY = event.clientX - startY;
    const newHeight = startHeight - diffY;
    s.style.width = newHeight + "px";
    s.style.transform = `translateX(${xx+diffY}px)`

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