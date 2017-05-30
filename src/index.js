import THREE from "n3d-threejs"

var renderer = undefined;

var setup = function() {
  renderer = new THREE.WebGLRenderer({ alpha : false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}

var update = function() {


  requestAnimationFrame(update);
}

setup();
update();
