const pointer = document.createElement("DIV");
pointer.id = "mouse-pointer";
const centerPointer = document.createElement("DIV");
centerPointer.id = "center-point";
document.body.appendChild(pointer);
document.body.appendChild(centerPointer);

document.onmousemove = function (event) {
  requestAnimationFrame(() => {
    centerPointer.style.left = event.clientX - 2 + "px";
    centerPointer.style.top = event.clientY - 2 + "px";
  });
  setTimeout(() => {
    requestAnimationFrame(() => {
      pointer.style.left = event.clientX - 7 + "px";
      pointer.style.top = event.clientY - 22 + "px";
    });
  }, 100);
};

document.onmousedown = function (event) {
  requestAnimationFrame(() => {
    centerPointer.style.transform = "scale(1.3)";
  });
};

document.onmouseup = function (event) {
  requestAnimationFrame(() => {
    centerPointer.style.transform = "scale(1)";
  });
};
