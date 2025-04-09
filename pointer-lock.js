document.addEventListener('click', function () {
  const element = document.documentElement; // Target the entire document

  if (element.requestPointerLock) {
    element.requestPointerLock();
  } else if (element.mozRequestPointerLock) { // For Firefox
    element.mozRequestPointerLock();
  } else if (element.webkitRequestPointerLock) { // For Safari
    element.webkitRequestPointerLock();
  }
});

// Optional: Listen for pointer lock state change or errors
document.addEventListener('pointerlockchange', function () {
  console.log('Pointer lock state has changed.');
});

document.addEventListener('pointerlockerror', function () {
  console.log('Error while trying to lock the pointer.');
});
