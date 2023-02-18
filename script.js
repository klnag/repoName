const lb = document.getElementById("lb");
const lt = document.getElementById("lt");
const s = document.getElementById("s");

let x = 0
let v = false
console.log(x)
lt.addEventListener("mousedown", function(event) {
  const childe = event.target.parentElement.children[8]

  event.preventDefault();

  const startHeight = parseInt(getComputedStyle(s).height, 10);
  const startY = event.clientY;

  x = Number(s.style.transform.slice(0,-3).slice(11))
  function onMouseMove(event) {
    
    const diffY = event.clientY - startY;
    const newHeight = startHeight - diffY;
    // console.log(`${startHeight} + ${diffY} = ` + (startHeight + diffY) ,x)
    s.style.height = newHeight + "px";
    console.log(x,diffY)
    s.style.transform = `translateY(${x+diffY}px)`
    childe.style.height = newHeight + "px";
    childe.style.transform = `translateY(${x+diffY}px)`
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
