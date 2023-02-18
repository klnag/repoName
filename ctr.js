let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight,match,startY) {
    if(d) {
      const diffY = event.clientY - startY;
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`

    const dx = event.clientX - initialX;
    const dy = event.clientY - initialY;
    const newMatrix = transformMatrix.translate(dx, dy);
    console.log(newMatrix)
    s.style.transform = newMatrix.toString();

        s.style.transform = `translate(${match[1]}px, ${Number(match[2])+diffY}px)`

        s.style.width = ((startwidth + (dx))) + "px";
        s.style.height = ((startheight + (dy*-1))) + "px";
    }
}

function onMouseUp(event) {
    d = false
    // console.log(event.target.parentElement)
    // event.target.parentElement.removeChild(event.target)
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

export const ctrf = (e) => {
      d = true
    const s = e.target.parentElement;
    const transformMatrix = new DOMMatrix(getComputedStyle(s).transform);
    let initialX = e.clientX;
    let initialY = e.clientY;
    const startwidth = parseInt(getComputedStyle(s).width, 10);
    const startheight = parseInt(getComputedStyle(s).height, 10);
    const startY = e.clientY;
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`
    const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);

    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight,match,startY);
    });

    document.addEventListener("mouseup", onMouseUp);
}