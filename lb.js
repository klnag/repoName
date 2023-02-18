export const lbf =  (event) => {
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
  }