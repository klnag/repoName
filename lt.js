const s = document.getElementById("s");

export const ltf = (event) => {
    event.preventDefault();
  
    if(!s.style.transform) {
  s.style.transform = `translate(0px, 0px)`
  
    }
  
    const startHeight = parseInt(getComputedStyle(s).height, 10);
    const startY = event.clientY;
    const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
  
    function onMouseMove(event) {
      const diffY = event.clientY - startY;
      const newHeight = startHeight - diffY;
  
      s.style.height = newHeight + "px";
      s.style.transform = `translate(${match[1]}px, ${Number(match[2])+diffY}px)`
    }
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }