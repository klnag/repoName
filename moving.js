let d = false

function onMouseMove(event, s, initialX, initialY, transformMatrix) {
    if(d) {
        const dx = event.clientX - initialX;
        const dy = event.clientY - initialY;
        const newMatrix = transformMatrix.translate(dx, dy);
        s.style.transform = newMatrix.toString();
    }
}

function onMouseUp(event) {
    d = false
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

export const moving = (e) => {
    if (e.target.className === "mov") {
      d = true
    const s = e.target;
    const transformMatrix = new DOMMatrix(getComputedStyle(s).transform);
    let initialX = e.clientX;
    let initialY = e.clientY;

    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, s, initialX, initialY, transformMatrix);
    });

    document.addEventListener("mouseup", onMouseUp);
  }
}