let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix,match) {
    if(d) {
        const dx = event.clientX - initialX;
        const dy = event.clientY - initialY;
        if(s.className) {

          s.style.transform = `translate(${(Number(match[1])+dx)}px, ${Number(match[2])+dy}px)`
        } 

        // const newMatrix = transformMatrix.translate(dx, dy);
        // s.style.transform = newMatrix.toString();
    }
}

function onMouseUp(event) {
    d = false
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

export const moving = (e) => {
    if (e.target.className === "mov") {
      // console.log(e.target)
      d = true
    const s = e.target;
    const transformMatrix = new DOMMatrix(getComputedStyle(s).transform);
    let initialX = e.clientX;
    let initialY = e.clientY;
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`

    const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);

    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix,match);
    });

    document.addEventListener("mouseup", onMouseUp);
  }
}