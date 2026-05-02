const keysPressed = {};
const box = document.getElementById("box");
const player = document.getElementById("player")

function doElementsOverlap(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function update() {
    if (keysPressed['KeyA']) {
        const currentStyle = window.getComputedStyle(box);
        let leftValue = parseInt(currentStyle.left) || 0;

        box.style.transition = keysPressed['Enter'] ? "left 0.06s" : "left 0.12s";
        
        box.style.left = (leftValue - 10) + "px";
    }

    if (doElementsOverlap(box, player)) {
        box.remove();
        console.log("Collision detected! Box removed.");
        return;
    }

    requestAnimationFrame(update);
}


document.addEventListener('keydown', (event) => {
    keysPressed[event.code] = true;
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.code];
});

requestAnimationFrame(update);