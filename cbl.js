let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix,startwidth,startheight,match,startY) {
    if(d) {
      const diffY = event.clientX - startY;
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`

    const dx = event.clientX - initialX;
    const dy = event.clientY - initialY;
    // console.log(dx, match[1])
        s.style.transform = `translate(${(dx + Number(match[1]))}px, ${match[2]}px)`

        s.style.width = ((startwidth + (dx*-1))) + "px";
        s.style.height = ((startheight + (dy))) + "px";
    }
} 

function onMouseUp(event) {
    d = false
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

export const cblf = (e) => {
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