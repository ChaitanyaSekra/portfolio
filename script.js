// JavaScript to make the first doodle follow the mouse cursor
document.addEventListener('mousemove', (e) => {
    const doodle1 = document.querySelector('.doodle-1');
    const mouseX = e.pageX;
    const mouseY = e.pageY;
  
    // Update position of doodle 1 based on mouse position
    doodle1.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
