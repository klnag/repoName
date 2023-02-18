export const lbf =  (event) => {
  const s = event.target.parentElement
    const startHeight = parseInt(getComputedStyle(s).height, 10);
    const startY = event.clientY;
  
    function onMouseMove(event) {
      const diffY = (startY - event.clientY) * -1;
      s.style.height = startHeight + diffY + "px";  
    }
  
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }