let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight) {
    if(d) {

    const dx = event.clientX - initialX;
    const dy = event.clientY - initialY;
    const newMatrix = transformMatrix.translate(dx, dy);
    console.log(((startheight + (dy*-1))) + "px")
        s.style.transform = newMatrix.toString();

        s.style.width = ((startwidth + (dx*-1))) + "px";
        s.style.height = ((startheight + (dy*-1))) + "px";
    }
}

function onMouseUp(event) {
    d = false
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

export const ctlf = (e) => {
      d = true
    const s = e.target.parentElement;
    const transformMatrix = new DOMMatrix(getComputedStyle(s).transform);
    let initialX = e.clientX;
    let initialY = e.clientY;
    const startwidth = parseInt(getComputedStyle(s).width, 10);
    const startheight = parseInt(getComputedStyle(s).height, 10);

    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight);
    });

    document.addEventListener("mouseup", onMouseUp);
}