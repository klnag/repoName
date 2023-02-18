export const lrf = (event) => {
    const childe = event.target.parentElement.children[8]
    const startwidth = parseInt(getComputedStyle(s).width, 10);
    const startY = event.clientX;
  
    function onMouseMove(event) {
      const diffY = (startY - event.clientX) * -1;
  
      s.style.width = startwidth + diffY + "px";  
      childe.style.width = startwidth + diffY + "px";
    }
  
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }