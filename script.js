const lt = document.getElementById("lt");
const lb = document.getElementById("lb");
const s = document.getElementById("s");

lt.addEventListener("mousedown", function(event) {
  event.preventDefault();

  const startHeight = parseInt(getComputedStyle(s).height, 10);
  const startTop = s.getBoundingClientRect().top;
  const startY = event.clientY;

  function onMouseMove(event) {
    const diffY = event.clientY - startY;
    const newHeight = startHeight - diffY;
    s.style.height = newHeight + "px";
    s.style.top = startTop + diffY + "px";
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
