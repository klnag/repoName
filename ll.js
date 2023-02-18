export const llf = (event) => {
    event.preventDefault();
    if(!s.style.transform) s.style.transform = `translate(0px, 0px)`
    
    const startHeight = parseInt(getComputedStyle(s).width, 10);
    const startY = event.clientX;
    const match1 = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
  
    function onMouseMove(event) {
      const match = s.style.transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
      const diffY = event.clientX - startY;
      const newHeight = startHeight - diffY;
  
      s.style.width = newHeight + "px";
      s.style.transform = `translate(${Number(match1[1])+diffY}px, ${match[2]}px)`
    }
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }