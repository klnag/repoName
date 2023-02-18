let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight,match) {
    if(d) {

    const dx = event.clientX - initialX;
    const dy = event.clientY - initialY;
    // const newMatrix = transformMatrix.translate(dx, dy);
    // console.log(((startheight + (dy*-1))) + "px")
        // s.style.transform = newMatrix.toString();
        s.style.transform = `translate(${Number(match[1]) + dx}px, ${Number(match[2])+dy}px)`


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
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`
    const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight,match);
    });

    document.addEventListener("mouseup", onMouseUp);
}