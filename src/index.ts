import Space from "./common/Space";
import { Scene, Vector3 } from "three";
import Curve from "./common/base/Curve";
import * as Selection from "d3-selection";

const THREE = (< IWindow>window).THREE;
const element = $("#3d-space")[0];
const space = new Space(element, {
  inspector:true,
  orbit:true
});

// space.load("./static/3d/scene0520d.glb")
// .then(()=>{
  // space.autoRotate(true);
  // const geo = new THREE.SphereGeometry( 20, 12, 12 );
  // const mat = new THREE.LineBasicMaterial({ color: 0xffff00});
  // const sphere = new THREE.Mesh( geo, mat );
  // space.scene.add(sphere);
  // let p1 = new THREE.Vector3();
  // let positionPercent={
  //   x:0,
  //   y:0,
  //   z:0
  // }

  // function updatePosition() {
  //   p1 = space.getPositionByPercent(positionPercent.x, positionPercent.y, positionPercent.z);
  //   sphere.position.copy(p1);
  // }

  // space.inspector.gui.add(positionPercent, "x", 0, 100).onChange(updatePosition);
  // space.inspector.gui.add(positionPercent, "y", 0, 100).onChange(updatePosition);
  // space.inspector.gui.add(positionPercent, "z", 0, 100).onChange(updatePosition);

// })

space.createEmptyScene();
// let line = new Curve(
//   space,
//   new THREE.Vector3( -10, 0, 0 ),
//   new THREE.Vector3( 10, 0, 0 ),
//   {line:true}
// );
// line.colorEasing("#444444", "#00ffff");
// line.positionEasing(new THREE.Vector3( -30, 0, 0 ), new THREE.Vector3( 30, 0, 0 ));
// setInterval(() => {
//   line.positionEasing(new THREE.Vector3( -30, 0, 0 ), new THREE.Vector3( 30, 0, 0 ));
// }, 2000);

const geo = new THREE.SphereGeometry( 1, 12, 12 );
const mat = new THREE.MeshLambertMaterial({ color: 0x00ffff});
const sphere = new THREE.Mesh( geo, mat );
const mat2 = new THREE.MeshLambertMaterial({ color: 0x00ff00});
const sphere2 = new THREE.Mesh( geo, mat2 );
const gui = space.inspector.gui
sphere2.layers.enable(1);
space.scene.add(sphere);
space.scene.add(sphere2);
sphere2.position.set(2, 0, 0);
space.initBloom();
space.initOutline();
space.setOutline([sphere])
let params={
  bloomThreshold:0,
  bloomStrength:0
}

gui.add(params, "bloomThreshold", 0.0, 1.0).onChange((value)=>{
  space.bloomPass.threshold  = Number( value );
});
gui.add(params, "bloomStrength", 0, 10).onChange((value)=>{
  space.bloomPass.strength  = Number(value);
});

// space.stopComposer = true;

// @ts-ignore
window.debugSpace=space;
